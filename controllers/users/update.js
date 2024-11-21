import User from '../../models/User.js';

const update = async (req, res, next) => {
    try {
        const { name, password } = req.body;

        // Verifica si el itinerario existe antes de intentar actualizar
        let existingUsers = await User.find({ name });

        if (!existingUsers) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        // Intenta la actualización la cotraseña
        let upd = await User.updateOne(
            { name }, // Busca por name
            { $set: { password } } // Actualiza solo el campo password
        );

        // Verifica si el campo `password` ha sido realmente actualizado
        if (existingUsers.password !== password) {
            return res.status(200).json({
                response: upd,
                message: "Password updated successfully."
            });
        } else {
            return res.status(200).json({
                message: "No changes detected in password. Value remains the same."
            });
        }

    } catch (error) {
        next(error);
    }
}

export { update };
