const { productModel } = require('../models');

getAllProducts = (req, res) => {
    productModel.find().exec((error, products) => {
        if (error) return res.status(500).json({ error: true, mensaje: error });
        res.json({ products });
    })
}

getOneProduct = (req, res) => {
    productModel.findOne({ _id: req.params.id }).exec((error, products) => {
        if (error) return res.status(500).json({ error: true, mensaje: error });
        res.json({ products });
    })
}

addProduct = (req, res) => {
    const product_new = new productModel(req.body);
    product_new.save((error, product) => {
        if (error) return res.status(500).json({ error: true, mensaje: error });
        res.json({ mensaje: req.body.producto + " agregado satisfactoriamente" });
    })
}

deleteProduct = async (req, res) => {
    const product_delete = await productModel.findByIdAndDelete({ _id: req.params.id })

    try {
        if (product_delete) return res.json({ mensaje: product_delete.descripcion + " eliminado correctamente" });
        else return res.status(500).json({ error: true, mensaje: "Falla al eliminar" });
    } catch (error) {
        return res.staus(500).json({ error: true, mensaje: error })
    }
}

updateProduct = async (req, res) => {
    try {
        const product_update = await productModel.findByIdAndUpdate({ _id: req.body._id }, req.body, { useFindAndModify: false });
        if (product_update) return res.json({ mensaje: "Producto actualizado correctamente" });
        else return res.status(400).json({ error: true, mensaje: "Falla al actualizar" })
    } catch (error) {
        if (error) return res.status(500).json({ error: true, mensaje: error });
    }
}

module.exports = Object.freeze({
    getAllProducts,
    getOneProduct,
    addProduct,
    deleteProduct,
    updateProduct
});