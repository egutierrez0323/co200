const {productModel} = require('../models');
const joi = require('@hapi/joi');

verifyTypes = (req, res, next) => {
    const product_joi = joi.object({
        _id: joi.optional(),
        producto: joi.string().required(),
        valor: joi.number().required(),
        estado: joi.string().required()
    });

    const {error} = product_joi.validate(req.body);
    if(error) return res.status(400).json({error:true, mensaje: error.details[0].message});
    next()
}

module.exports = Object.freeze({
    verifyTypes
});