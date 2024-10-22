import { Router } from "express";
import {allCities,Citiesbyname, Citiesbycountry} from "../controllers/Cities/read.js";
import { create,createMany } from "../controllers/Cities/create.js";
import conflictMiddleware from "../middlewares/conflict_Middleware.js";
const router = Router()

router.get('/all', allCities)
router.get('/name/:city',Citiesbyname)
router.get('/country/:country', Citiesbycountry);
router.post('/create',conflictMiddleware,create);
router.post('/createMany',conflictMiddleware,createMany); // todo en una sola operacion

 


export default router