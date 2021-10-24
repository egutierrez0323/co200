const {productModel} = require('../models');
const joi = require('@hapi/joi');

verifyTypes = (req, res, next) => {
    const product_joi = joi.object({
        _id: joi.optional(),
        idProducto: joi.number().required(),
        descripcion: joi.string().required(),
        valorUnitario: joi.number().required(),
        activo: joi.boolean().optional()
    });

    const {error} = product_joi.validate(req.body);
    if(error) return res.status(400).json({error:true, mensaje: error.details[0].message});
    next()
}

verifyIdProducto = (req, res, next) => {
    productModel.findOne({idProducto: req.body.idProducto}).exec((error, product) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        if(product) return res.status(400).json({error:true, mensaje: product.descripcion + " está registrado con el id " + product.idProducto});
        next();
    });
}

module.exports = Object.freeze({
    verifyTypes,
    verifyIdProducto
});