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
    return { success: false, message: 'Error creating user in the database' };
  }
};

