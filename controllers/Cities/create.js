import Cities from "../../models/Cities.js";
import conflictMiddleware from "../../middlewares/conflict_Middleware.js";
let create  = async (req, res, next) => {
    try {
        let cities = req.body;
        let newCities = await Cities.create(cities);
        return res.status(201).json({
            response: newCities,
            message: "Store successfully registered."
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let cities = req.body;
        let newCities = await Cities.insertMany(cities);
        return res.status(201).json({
            response: newCities,
            message: "Store successfully registered."
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };