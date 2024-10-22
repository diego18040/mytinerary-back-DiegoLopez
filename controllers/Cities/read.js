import Cities from '../../models/Cities.js';

let allCities = async (req, res) => {
        try {
            console.log(req.params);

            let all = await Cities.find()
            return res.status(200).json({
                response: all
            })
        } catch (error) {
            return res.status(500).json({
                response: error
            })
        }

    }

let Citiesbyname = async (req,res,next) =>{
    try {
        let cityQuery = req.params.city
        let city = await Cities.findOne({city: cityQuery} );
        if (city){
            return res.status(200).json({
                response: city
            });
            
        }else {
            return res.status(404).json({
                response: "City is missing"
            });

        }
    } catch (error) {
        next(error);
    }
};

let Citiesbycountry = async (req , res, next) =>{
    try {
        let countryQuery = req.params.country
        let city = await Cities.findOne({country: countryQuery});
        if (city){
            return res.status(200).json({
                response: city
            });

        }else{
            return res.status(404).json({
                response: "Country not found"
            });

        }
    }catch (error){
        next(error)
    }
};

export  { allCities,Citiesbyname,Citiesbycountry }