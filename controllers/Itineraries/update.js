import Itineraries from '../../models/Itineraries.js';

const update = async (req, res, next) => {
    try {
        const { admin_id, price } = req.body;

        // Verifica si el itinerario existe antes de intentar actualizar
        let existingItinerary = await Itineraries.find({ admin_id });

        if (!existingItinerary) {
            return res.status(404).json({
                message: "Itinerary not found."
            });
        }

        // Intenta la actualización del precio
        let upd = await Itineraries.updateOne(
            { admin_id }, // Busca por admin_id
            { $set: { price } } // Actualiza solo el campo price
        );

        // Verifica si el campo `price` ha sido realmente actualizado
        if (existingItinerary.price !== price) {
            return res.status(200).json({
                response: upd,
                message: "Price updated successfully."
            });
        } else {
            return res.status(200).json({
                message: "No changes detected in price. Value remains the same."
            });
        }

    } catch (error) {
        next(error);
    }
}

export { update };
