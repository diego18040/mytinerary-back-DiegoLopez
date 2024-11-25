import jwt from 'jsonwebtoken';
import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        const user = await User.findOneAndUpdate(
            { email: req.user.email }, // Asegúrate de que `req.user` tenga el email correcto.
            { online: true },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Generar un token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.SECRET,
            { expiresIn: "1d" } // Tiempo de expiración del token
        );

        // Redirigir al frontend con el token
        const redirectUrl = `http://localhost:5173/?token=${token}`;
        return res.redirect(redirectUrl);

    } catch (error) {
        next(error);
    }
};
