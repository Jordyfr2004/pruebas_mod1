import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

// Necesario para usar __dirname con ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'interfaz.html'));
});

// Aquí puedes agregar tus rutas API, middlewares, etc.

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});



//usar npm run dev para ejecutar en el terminal