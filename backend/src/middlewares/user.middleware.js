const {userModel} = require('../models');
const joi = require('@hapi/joi');

verifyTypes = (req, res, next) => {
    const user_joi = joi.object({
        _id: joi.optional(),
        nombre: joi.string().required(),
        telefono: joi.string().required(),
        rol: joi.string().required(),
        email: joi.string().optional(),
        password: joi.string().required(),
        estado: joi.string().required(),
    });
    const {error} = user_joi.validate(req.body);
    if(error) return res.status(400).json({error:true, mensaje: error.details[0].message});
    next()
}

module.exports = Object.freeze({
    verifyTypes
});