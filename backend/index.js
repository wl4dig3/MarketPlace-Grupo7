import express from 'express';
import db from './src/config/db.js'; // Asegúrate de que la ruta sea correcta

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares y rutas aquí

app.listen(PORT, () => {
  console.log(`Server on 🔥 http://localhost:${PORT}`);
});

export default app