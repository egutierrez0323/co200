const { saleModel } = require('../models');

getAllSales = (req, res) => {
    saleModel.find().exec((error, sales) => {
        if (error) return res.status(500).json({ error: true, mensaje: error });
        res.json({ sales });
    })
}

getOneSale = (req, res) => {
    saleModel.findOne({ _id: req.params.id }).exec((error, sales) => {
        if (error) return res.status(500).json({ error: true, mensaje: error });
        res.json({ sales });
    })
}

addSale = (req, res) => {
    const sale_new = new saleModel(req.body);
    sale_new.save((error, sale) => {
        if (error) return res.status(500).json({ error: true, mensaje: error })
        res.json({ mensaje: " agregado satisfactoriamente" })
    })
}

deleteSale = async (req, res) => {
    const sale_delete = await saleModel.findByIdAndDelete({ _id: req.params.id })

    try {
        if (sale_delete) return res.json({ mensaje: sale_delete._id + " eliminado correctamente" });
        else return res.status(500).json({ error: true, mensaje: "Falla al eliminar" });
    } catch (error) {
        return res.staus(500).json({ error: true, mensaje: error })
    }
}

updateSale = async (req, res) => {
    try {
        const sale_update = await saleModel.findByIdAndUpdate({ _id: req.body._id }, req.body, { useFindAndModify: false });
        if (sale_update) return res.json({ mensaje: "actualizado correctamente" });
        else return res.status(400).json({ error: true, mensaje: "Falla al actualizar" })
    } catch (error) {
        if (error) return res.status(500).json({ error: true, mensaje: error });
    }
}

module.exports = Object.freeze({
    getAllSales,
    getOneSale,
    addSale,
    deleteSale,
    updateSale
});