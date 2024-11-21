import { Router } from "express";
import signIn from "../controllers/auth/signln.js";
import accountNoExist from "../middlewares/accountNoExist.js";
import isValidadPassword from "../middlewares/isValidadPassword.js";
import generateToken from "../middlewares/generateToken.js";
import signout from "../controllers/auth/signout.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import jwt from 'jsonwebtoken'

const routerAuth = Router()

routerAuth.post('/signIn', accountNoExist ,isValidadPassword,generateToken,signIn)
routerAuth.post('/signout', passport.authenticate('jwt', { session: false }), signout)

// Ruta para iniciar sesion con google
routerAuth.get(
    '/signin/google',
    passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] })
)
routerAuth.get(
    '/signin/google/callback',
    passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }),
    generateToken,
    signIn
)





export default routerAuth