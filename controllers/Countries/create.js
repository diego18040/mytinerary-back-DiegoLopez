import Countries from "../../models/Countries.js";
import conflictMiddleware from "../../middlewares/conflict_Middleware.js";
let create  = [
    conflictMiddleware,
    async (req, res, next) => {
    try {
        let countries = req.body;
        let newcountries = await Countries.create(countries);
        return res.status(201).json({
            response: newcountries,
            message: "Countries successfully registered."
        });
    } catch (error) {
        next(error);
    }
}
];

export default create;