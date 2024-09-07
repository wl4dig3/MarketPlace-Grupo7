import pg from 'pg';
import 'dotenv/config'
const { Pool } = pg;

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const config = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Dji3pro',
    database: 'marketplace',
    allowExitOnIdle: true
}
const pool = new Pool(config);


export default pool
try {
    await pool.query('SELECT NOW()');
    console.log('Database connected');
  } catch (error) {
    console.log('fucking error',error);
  }