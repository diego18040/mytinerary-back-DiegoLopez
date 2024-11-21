import { Router } from "express";
import allCountries from "../controllers/Countries/read.js";
import  create  from "../controllers/Countries/create.js";
import conflictMiddleware from "../middlewares/conflict_Middleware.js";


const router = Router()

router.get('/all', allCountries)
router.post('/create',conflictMiddleware,create);



export default router