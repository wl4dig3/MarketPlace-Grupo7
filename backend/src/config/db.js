import pg from 'pg';
import 'dotenv/config'
const { Pool } = pg;

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const config = {
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: '26062024',
    database: 'marketplace',
    allowExitOnIdle: true
}
const pool = new Pool(config);

try {
    await pool.query('SELECT NOW()');
    console.log('Database connected');
  } catch (error) {
    console.log(error);
  }

export default pool