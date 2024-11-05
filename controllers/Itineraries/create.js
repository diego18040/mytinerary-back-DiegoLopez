import Itineraries from "../../models/Itineraries.js";
import conflictMiddleware from "../../middlewares/conflict_Middleware.js";
let create  = [
    conflictMiddleware,
    async (req, res, next) => {
    try {
        let itineraries = req.body;
        let newitineraries = await Itineraries.create(itineraries);
        return res.status(201).json({
            response: newitineraries,
            message: "itinerarie successfully registered."
        });
    } catch (error) {
        next(error);
    }
}
];

let createMany = [
    conflictMiddleware,
    async (req, res, next) => {
    try {
        let itineraries = req.body;
        let newitineraries = await Itineraries.insertMany(itineraries);
        return res.status(201).json({
            response: newitineraries,
            message: "itinerarie successfully registered."
        });
    } catch (error) {
        next(error);
    }
}
];

export { create, createMany };