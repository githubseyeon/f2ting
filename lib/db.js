import mysql from "mysql2";
import { OkPacket, ResultSetHeader, Pool, RowDataPacket } from "mysql2/promise";

const pool = mysql.createPool({
  host: "f2ting-database.cvcuqom4kpvq.us-east-2.rds.amazonaws.com",
  user: "admin",
  database: "f2ting_database",
  password: "mutsaf2tingdatabase",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool.promise();