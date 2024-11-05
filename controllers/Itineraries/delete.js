import { response } from 'express';
import Itineraries from '../../models/Itineraries.js';

let deletOne = async (req, res, next) =>{
    try{

        let deletitineraries = await Itineraries.deleteOne({
            admin_id: req.body.admin_id

    })
    /*let destroyed = await Category.deleteMany(
        { admin_id: req.body.admin_id}
    )
    let destroyed = await Category.findOneAndDelete(
        { admin_id: req.body.admin_id}
    )
    let destroyed = await Category.findByIdAndDelete(req.params.id)*/

    return res.status (200).json({
        response: deletitineraries
    })

    }catch (error){
        next(error)
    }
}


export {deletOne}