import pool from '../config/db.js'; 

const getUserById = async (id) => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
};

const createUser = async (user) => {
    const { username, email, phone_number, date_of_birth, password } = user;
    const result = await pool.query(
        'INSERT INTO users (username, email, phone_number, date_of_birth, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [username, email, phone_number, date_of_birth, password]
    );
    return result.rows[0];
};

const deleteUserById = async (id) => {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

export { getUserById, createUser, deleteUserById };
