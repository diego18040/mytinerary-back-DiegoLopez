import { Schema, model } from "mongoose";

let collection ='itineraries'
let schema = new Schema({
    admin_id:{type:String,required:true},
    name:{type:String,required:true},
    myphoto:{type:String,required:true},
    time:{type:Number,required:true},
    likes:{type:Number,required:true},
    hashtags:{type:[String],required:true},
    city:{type:String,required:true},
    price:{type:Number,required:true},
    //photo:{type:String,required:true}//
},{
    timestamps: true
})

let Itineraries = model(collection,schema)

export default Itineraries