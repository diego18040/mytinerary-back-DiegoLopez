import { response } from 'express';
import Itineraries from '../../models/Itineraries.js';

let allItenaries = async (req, res) => {
        try {
            console.log(req.params);

            let all = await Itineraries.find()
            return res.status(200).json({
                response: all
            })
        } catch (error) {
            return res.status(500).json({
                response: error
            })
        }

    }

let Itenariesbycity = async (req,res,next) =>{
    try {
        let cityQuery = req.params.city
        let city = await Itineraries.find({city: cityQuery} );
        if (city){
            return res.status(200).json({
                response: city
            });
            
        }else {
            return res.status(404).json({
                response: "No itineraries yet for this city"
            });

        }
    } catch (error) {
        next(error);
    }
};

let Itenariesbyid = async (req, res, next) => {
    try {
        let admin_idQuery = req.params.admin_id;
        let itineraries = await Itineraries.find({ admin_id: admin_idQuery }); // Busca por admin_id

        if (itineraries.length > 0) { // Verifica si hay itinerarios encontrados
            return res.status(200).json({
                response: itineraries
            });
        } else {
            return res.status(404).json({
                response: "No itineraries found for this admin_id"
            });
        }
    } catch (error) {
        next(error);
    }
};


export  {Itenariesbycity,allItenaries,Itenariesbyid}