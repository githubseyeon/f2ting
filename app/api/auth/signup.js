import pool from '../../../lib/db';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: '모든 항목을 입력해 주세요.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      'INSERT INTO USER (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );
    return res.status(201).json({ userId: result.insertId });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: '사용자가 이미 존재합니다.' });
    }
    console.error('Signup error:', error);
    return res.status(500).json({ message: 'Error creating user' });
  }
}
