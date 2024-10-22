import { Schema, model } from "mongoose";

let collection ='cities'
let schema = new Schema({
    city:{type:String,required:true},
    country:{type:String,required:true},
    description:{type:String,required:true},
    foundation:{type:String,required:true},
    population:{type:Number,required:true},
    photo:{type:String,required:true}
},{
    timestamps: true
})

let Store = model(collection,schema)

export default Store