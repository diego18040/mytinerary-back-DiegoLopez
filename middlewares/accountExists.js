import User from "../models/User.js";

export default async (req,res,next) =>{
    try{
        let accoount = await User.findOne({email: req.body.email})
        if (accoount){
            return res.status(400).json({
                success:false,
                messages: 'User already exists'
            })
        }
        next()
    }catch (error){
        next (error)

    }
}