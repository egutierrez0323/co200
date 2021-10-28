import Producto from '../models/producto.model'

let ProductoController = {

    getProductos : async (req,res) => {
        try{
            const Productos = await Producto.find();
            res.status(200)
              res.json(Productos)                   
        } catch(err) {
            console.log(err)
            res.status(400)
            .json({
                message : err
            });
        }
    },
    saveProducto: async (req, res) => {
        const body = req.body;    
        try {
          const savedProducto = await Producto.create(body);
          res
            .status(201)
            .json(savedProducto);
        } catch (err) {
            console.log(err)
          res
            .status(500)
            .json({
              message: err
            });
        }
    },
    deleteProducto: async (req, res) => {
      const _id = req.params.id;
      try{
        const deletedProducto = await Producto.findByIdAndDelete({_id})
        if(!deletedProducto){
          return res.status(404).json({
            message : err
          })
        };

        res.json(deletedProducto)

      }catch (err){
        res.status(400)
        .json({
          message : err
        })
      }
    },
    


}

export default ProductoController