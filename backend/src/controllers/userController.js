import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail} from '../model/userModel.js';

export const createUserController = async (req, res) => {
  const { username, email, phone_number, date_of_birth, password } = req.body;

  if (!username || !email || !phone_number || !date_of_birth || !password) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await createUser({
        username,
        email,
        phone_number,
        date_of_birth,
        password: hashedPassword
      });

      return res.status(201).json({
        id: result.id,
        username: result.username,
        email: result.email,
        phone_number: result.phone_number
      });
    } catch (error) {
      return res.status(500).json({ message: 'Error creando el usuario' });
    }
  };

  //Controlador login ususuario
  export const loginUserController = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Invalido' });
    }
  
    try {
      const result = await findUserByEmail(email);
      if (!result.success) {
        return res.status(401).json({ message: 'Credenciales invalidas' });
      }
  
      const user = result.data;
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Credenciales invalidas' });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      return res.status(200).json({
        success: {
          status: 200,
          token: token,
          user: {
            id: user.id,
            email: user.email,
            phone_number: user.phone_number,
            picture: 'https://via.placeholder.com/150'
          }
        }
      });
    } catch (error) {
      return res.status(500).json({ message: 'Error en el login' });
    }
  };