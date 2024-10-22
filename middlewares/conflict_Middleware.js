
const conflictMiddleware = async (req, res, next) => {
    try {
        const { id } = req.body;
        
        // Verifica si ya existe un empleado con el mismo `id`
        const existingEmployee = await Employee.find({ id });

        if (existingEmployee) {
            return res.status(409).json({
                message: `Conflict: Employee with id ${id} already exists.`
            });
        }

        // Si no hay conflicto, continúa con la siguiente función
        next();
    } catch (error) {
        next(error);
    }
};

export default conflictMiddleware;
