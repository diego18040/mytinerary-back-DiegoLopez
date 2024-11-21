import User from "../../models/User.js";

let register  = async (req, res, next) => {
    try {
        let users = req.body;
        console.log(users);
        users.online = false

        let newusers = await User.create(users);
        return res.status(201).json({
            response: newusers,
            message: "User successfully registered."
        });
    } catch (error) {
        next(error);
    }
}
export default register;