import pool from '../config/db.js'; 
import bcrypt from 'bcryptjs';

export const createUser = async (userData) => {
  const { username, email, phone_number, date_of_birth, password } = userData;

  const query = `
    INSERT INTO users (username, email, phone_number, date_of_birth, password)
    VALUES ($1, $2, $3, TO_DATE($4, 'DD/MM/YYYY'), $5)
    RETURNING id, username, email, phone_number;
  `;

  const values = [username, email, phone_number, date_of_birth, password];
  try {
    const result = await pool.query(query, values);
    return { success: true, data: result.rows[0] };
  } catch (error) {
    console.error('Database error:', error);
    return { success: false, message: 'Error al crear el usuario' };
  }
};
export const findUserByEmail = async (email) => {
    const query = `SELECT id, email, phone_number, password, picture FROM users WHERE email = $1`;
  
    try {
      const result = await pool.query(query, [email]);
      if (result.rows.length > 0) {
        return { success: true, data: result.rows[0] };
      }
      return { success: false, message: 'User no encontrado' };
    } catch (error) {
      console.error('Database query error:', error);
      return { success: false, message: 'Error de consulta' };
    }
  };