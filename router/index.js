import { Router } from "express";
import citiesRouter from './cities.js';

const routerIndex = Router()

routerIndex.use('/cities',citiesRouter)

export default routerIndex;