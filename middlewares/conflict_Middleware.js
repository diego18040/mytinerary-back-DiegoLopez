import Itineraries from '../models/Itineraries.js';

const conflictMiddleware = async (req, res, next) => {
    try {
        const { admin_id } = req.body;

        const existingItinerary = await Itineraries.findOne({ admin_id });

        if (existingItinerary) {
            return res.status(409).json({
                message: `Conflict: Itinerary with admin_id ${admin_id} already exists.`
            });
        }

        // Si no hay conflicto, continúa con la siguiente función
        next();
    } catch (error) {
        next(error); // Pasa el error al manejador de errores
    }
};

export default conflictMiddleware;
