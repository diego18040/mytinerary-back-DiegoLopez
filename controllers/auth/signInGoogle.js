import User from "../../models/User.js";

export default async(req,res,next) => {
    try {
        await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true}
        )
        console.log(req);
        
       return res.redirect('https://google.com?email:' +req.user.email+'token'+req.token)

    } catch (error) {
       next(error) 
    }
}