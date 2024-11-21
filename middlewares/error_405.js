
const error_405 = (req,res,next) =>{
    console.log (error);
    if (error.nombre = "bad Request"){
        return res.status(405).json({
            succeess: false,
            response: error,
            messagge: "Error"
        })
    }
    next(error)
}
export default error_405