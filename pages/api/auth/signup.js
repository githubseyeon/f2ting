import pool from "../../../lib/db";
import bcrypt from "bcrypt";
import { queryDatabase } from "../../../lib/databaseUtils";

export default async function handler(req, res) {
  const { username, email, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "모든 항목을 입력해 주세요." });
  }

  if (req.url.endsWith("/signup")) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const [result] = await pool.query(
        "INSERT INTO USER (username, email, password) VALUES (?, ?, ?)",
        [username, email, hashedPassword]
      );
      return res.status(201).json({ userId: result.insertId });
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return res.status(409).json({ message: "사용자가 이미 존재합니다." });
      }
      console.error("Signup error:", error);
      res.status(500).json({ message: "Error creating user" });
    }
  } else if (req.url.endsWith("/login")) {
    try {
      const [rows] = await pool.query(
        "SELECT password FROM USER WHERE username = ?",
        [username]
      );
      if (
        rows.length > 0 &&
        (await bcrypt.compare(password, rows[0].password))
      ) {
        return res.status(200).json({ message: "Login successful" });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Error logging in" });
    }
  } else {
    return res.status(404).end();
  }
}
