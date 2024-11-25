import { Router } from "express";
import {allUser ,Userbyname } from "../controllers/users/read.js";
import register from "../controllers/users/register.js";
import { update } from "../controllers/users/update.js";
import { deleteOne } from "../controllers/users/delete.js";
import validator from "../middlewares/validator.js"
import SchemaUsersCreate  from "../schemas/users/create.js";
import passport from "../middlewares/passport.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";

const routerUser = Router()

routerUser.get('/all',passport.authenticate('jwt',{session:false}), allUser)
routerUser.get('/name/:name',passport.authenticate('jwt',{session:false}),Userbyname)
routerUser.post('/register',validator(SchemaUsersCreate),accountExists,createHash,register);
/*routerUser.post('/registerMany',passport.authenticate('jwt',{session:false}),validator(schema_users_create),createHash,registerMany); // todo en una sola operacion*/
routerUser.put('/update',passport.authenticate('jwt',{session:false}),createHash,update)
routerUser.delete('/deleteOne',passport.authenticate('jwt',{session:false}),deleteOne)



export default routerUser