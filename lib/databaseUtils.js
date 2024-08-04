import pool from "./db";

export async function queryDatabase() {
  const [rows] = await pool.query("SELECT * FROM f2ting_database");
  return rows;
}