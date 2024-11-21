import User from "../../models/User.js";

export default async(req,res,next) => {
    try {
        await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true}
        )
        console.log(req);
        
        return res.status(200).json({
            success: true,
            message : "signed In",
            user:{
                name: req.user.name,
                password: req.user.password,
                
            },
            token: req.token
        })

    } catch (error) {
       next(error) 
    }
}