import Product from '../models/product.model'

let productController = {

    getProducts : async (req,res) => {
        try{
            const Product = Product.find();
            res.status(200)
            .json(Product);
        } catch(err) {
            res.status(400)
            .json({
                message : err
            });
        }
    }


}