import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      message: 'Acceso denegado. No se proporcionó un token.',
      links: {
        login: { href: '/api/login', method: 'POST' },
        register: { href: '/api/register', method: 'POST' },
      },
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        message: 'Token inválido o expirado.',
        links: {
          login: { href: '/api/login', method: 'POST' },
          register: { href: '/api/register', method: 'POST' },
        },
      });
    }

    req.user = user;
    next();
  });
};

export default authenticateToken;
