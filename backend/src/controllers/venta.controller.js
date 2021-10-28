import Venta from '../models/venta.model'

let VentaController = {

    getVentas : async (req,res) => {
        try{
            const Ventas = await Venta.find();
            res.status(200)
              res.json(Ventas)                   
        } catch(err) {
            console.log(err)
            res.status(400)
            .json({
                message : err
            });
        }
    },
    saveVenta: async (req, res) => {
        const body = req.body;    
        try {
          const savedVenta = await Venta.create(body);
          res
            .status(201)
            .json(savedVenta);
        } catch (err) {
            console.log(err)
          res
            .status(500)
            .json({
              message: err
            });
        }
    },
    deleteVenta: async (req, res) => {
      const _id = req.params.id;
      try{
        const deletedVenta = await Venta.findByIdAndDelete({_id})
        if(!deletedVenta){
          return res.status(404).json({
            message : err
          })
        };

        res.json(deletedVenta)

      }catch (err){
        res.status(400)
        .json({
          message : err
        })
      }
    },
    


}

export default VentaController