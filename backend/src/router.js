export default (app) => {

    app.get('/', async (req, res) => {
        res.send('prueba de Router');
    });
  
  }