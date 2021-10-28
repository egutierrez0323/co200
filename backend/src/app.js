const express = require('express');
//ciroac3188 const config  = require('./config');
//ciroac3188 const router = require('./router');
//ciroac3188 const database = require('./database');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Configure
const cors = require('cors');
require('dotenv').config();
app.use(cors());

//database
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
const option = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(uri, option)
.then(() => console.log("Base de datos conectada correctamente"))
.catch((e) => console.log("Error en la conexión: " + e));


// ruta
//ciroac3188 router(app);
const {saleRoutes} = require('./routes');
const {salesPersonRoutes} = require('./routes');
const {productRoutes} = require('./routes');
const {userRoutes} = require('./routes');

app.use('/api/v1/sale', saleRoutes);
app.use('/api/v1/salesPerson', salesPersonRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/user', userRoutes);

//ciroac3188 replace bodyParser
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//escucha
app.listen(process.env.PORT, () =>
  console.log(`El servidor ha sido inicializado: http://localhost:${process.env.PORT}`)
);