const { salesPersonModel } = require('../models');

getAllSalesPersons = (req, res) => {
    salesPersonModel.find().exec((error, salesPersons) => {
        if (error) return res.status(500).json({ error: true, mensaje: error });
        res.json({ salesPersons });
    })
}

getOneSalesPerson = (req, res) => {
    salesPersonModel.findOne({ _id: req.params.id }).exec((error, salesPersons) => {
        if (error) return res.status(500).json({ error: true, mensaje: error });
        res.json({ salesPersons });
    })
}

addSalesPerson = (req, res) => {
    const salesPerson_new = new salesPersonModel(req.body);
    salesPerson_new.save((error, sale) => {
        if (error) return res.status(500).json({ error: true, mensaje: error })
        res.json({ mensaje: " agregado satisfactoriamente" })
    })
}

deleteSalesPerson = async (req, res) => {
    const salesPerson_delete = await salesPersonModel.findByIdAndDelete({ _id: req.params.id })

    try {
        if (salesPerson_delete) return res.json({ mensaje: salesPerson_delete.nombreCompleto + " eliminado correctamente" });
        else return res.status(500).json({ error: true, mensaje: "Falla al eliminar" });
    } catch (error) {
        return res.staus(500).json({ error: true, mensaje: error })
    }
}

updateSalesPerson = async (req, res) => {
    try {
        const salesPeson_update = await salesPersonModel.findByIdAndUpdate({ _id: req.body._id }, req.body, { useFindAndModify: false });
        if (salesPeson_update) return res.json({ mensaje: "actualizado correctamente" });
        else return res.status(400).json({ error: true, mensaje: "Falla al actualizar" })
    } catch (error) {
        if (error) return res.status(500).json({ error: true, mensaje: error });
    }
}

module.exports = Object.freeze({
    getAllSalesPersons,
    getOneSalesPerson,
    addSalesPerson,
    deleteSalesPerson,
    updateSalesPerson
});