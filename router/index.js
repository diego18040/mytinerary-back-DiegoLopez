import { Router } from "express";
import citiesRouter from './cities.js';
import itineariesRouter from './itineraries.js'

const routerIndex = Router()

routerIndex.use('/cities',citiesRouter)
routerIndex.use('/itenary',itineariesRouter)

export default routerIndex;