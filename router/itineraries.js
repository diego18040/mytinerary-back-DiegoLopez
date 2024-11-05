import { Router } from "express";
import {allItenaries,Itenariesbycity,Itenariesbyid} from "../controllers/Itineraries/read.js";
import { create,createMany } from "../controllers/Itineraries/create.js";
import conflictMiddleware from "../middlewares/conflict_Middleware.js";
import { update } from "../controllers/Itineraries/update.js";
import { deletOne } from "../controllers/Itineraries/delete.js";

const router = Router()

router.get('/all', allItenaries)
router.get('/name/:city',Itenariesbycity);
router.get('/admin_id/:admin_id',Itenariesbyid);
router.post('/create',conflictMiddleware,create);
router.post('/createMany',conflictMiddleware,createMany); // todo en una sola operacion
router.put('/update',update)
 router.delete('/deleteOne',deletOne)


export default router