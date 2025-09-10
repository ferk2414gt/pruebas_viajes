const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir cada carpeta en su ruta
app.use('/usuario1', express.static(path.join(__dirname, 'usuario1')));
app.use('/usuario2', express.static(path.join(__dirname, 'usuario2')));
app.use('/usuario3', express.static(path.join(__dirname, 'usuario3')));

// Si alguien entra a la raíz, mostrar un mensaje opcional
app.get('/', (req, res) => {
  res.send('Ingresa directamente a /carpeta1, /carpeta2 o /carpeta3');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
  
