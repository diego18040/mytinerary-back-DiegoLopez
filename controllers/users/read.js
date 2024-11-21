import User from '../../models/User.js';

let allUser = async (req, res) => {
        try {
            console.log(req.params);

            let all = await User.find()
            return res.status(200).json({
                response: all
            })
        } catch (error) {
            return res.status(500).json({
                response: error
            })
        }

    }

let Userbyname =async (req,res) =>{
    try {
        let nameQuery = req.params.name
        let all = await User.find( {name:nameQuery} )
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}
export  { allUser,Userbyname }