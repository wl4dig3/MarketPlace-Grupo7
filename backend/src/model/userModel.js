import pool from '../config/db.js'; 

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
    console.error('Error al crear el usuario:', error);
    return { success: false, message: 'Error al crear el usuario' };
  }
};

export const getUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email = $1`;
  const values = [email];

  try {
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    return { success: false, message: 'Error al obtener el usuario' };
  }
};
