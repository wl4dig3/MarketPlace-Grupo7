import { createUser } from '../model/userModel.js';

export const createUserController = async (req, res) => {
  const { username, email, phone_number, date_of_birth, password } = req.body;

  if (!username || !email || !phone_number || !date_of_birth || !password) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    const result = await createUser({ username, email, phone_number, date_of_birth, password });

    if (result.success) {
      return res.status(201).json({
        status: 201,
        id: result.data.id,
        username: result.data.username,
        email: result.data.email,
        phone_number: result.data.phone_number,
      });
    } else {
      return res.status(500).json({ message: result.message });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error creando el usuario' });
  }
};
