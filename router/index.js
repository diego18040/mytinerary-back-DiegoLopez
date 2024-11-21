import { Router } from "express";
import usersRouter from './user.js';
import citiesRouter from './cities.js';
import itineariesRouter from './itineraries.js'
import auth from "./auth.js"

const routerIndex = Router()

routerIndex.use('/users',usersRouter)
routerIndex.use('/cities',citiesRouter)
routerIndex.use('/itenary',itineariesRouter)
routerIndex.use('/auth',auth)

export default routerIndex;