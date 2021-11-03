const { userModel } = require('../models');

getAllUsers = (req, res) => {
    userModel.find().exec((error, users) => {
        if (error) return res.status(500).json({ error: true, mensaje: error });
        res.json({ users });
    })
}

getOneUser = (req, res) => {
    userModel.findOne({ _id: req.params.id }).exec((error, users) => {
        if (error) return res.status(500).json({ error: true, mensaje: error });
        res.json({ users });
    })
}

addUser = (req, res) => {
    const user_new = new userModel(req.body);
    user_new.save((error, user) => {
        if (error) return res.status(500).json({ error: true, mensaje: "Tenemos un problema " + error });
        res.json({ mensaje: req.body.nombre + " agregado satisfactoriamente" });
    })
}

deleteUser = async (req, res) => {
    const user_delete = await userModel.findByIdAndDelete({ _id: req.params.id })

    try {
        if (user_delete) return res.json({ mensaje: " eliminado correctamente" });
        else return res.status(500).json({ error: true, mensaje: "Falla al eliminar" });
    } catch (error) {
        return res.staus(500).json({ error: true, mensaje: error })
    }
}

updateUser = async (req, res) => {
    try {
        const user_update = await userModel.findByIdAndUpdate({ _id: req.body._id }, req.body, { useFindAndModify: false });
        if (user_update) return res.json({ mensaje: "actualizado correctamente" });
        else return res.status(400).json({ error: true, mensaje: "Falla al actualizar" })
    } catch (error) {
        if (error) return res.status(500).json({ error: true, mensaje: error });
    }
}

module.exports = Object.freeze({
    getAllUsers,
    getOneUser,
    addUser,
    deleteUser,
    updateUser
});