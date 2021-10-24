//const {productRoutes} = require('./routes');

export default (app) => {

    app.get('/', async (req, res) => {
        res.send('prueba de Router');
    });
    //app.use('/api/v1/product', productRoutes);
  
  }