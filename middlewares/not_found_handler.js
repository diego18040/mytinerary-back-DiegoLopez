const not_found_handler = (req,res,next) =>{
    return res.status(404).json({
        success: false,
        //Manejo de erro 404//
        message: `bruta no encontrada - Not Found - La peticion con el metodo ${req.method} con la ruta ${req.url}`
    })
}

export default not_found_handler