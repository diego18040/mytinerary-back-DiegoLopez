import Countries from '../../models/Countries.js'

let allCountries = async (req, res) => {
    try {
        console.log(req.params);

        let all = await Countries.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }

}

export default allCountries;