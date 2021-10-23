import User from '../models/user.model'

let userController = {

    getUsers : async (req,res) => {
        try{
            const User = User.find();
            res.status(200)
            .json(User);
        } catch(err) {
            res.status(400)
            .json({
                message : err
            });
        }
    }


}