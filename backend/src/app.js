import express from "express";
import config from './config'
import router from './router'
const app = express();


// Configure
config(app);

// ruta
router(app);

//escucha
app.listen(process.env.PORT, () =>
  console.log(`El servidor ha sido inicializado: http://localhost:${process.env.PORT}`)
);