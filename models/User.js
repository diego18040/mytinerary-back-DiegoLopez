import { Schema, model } from "mongoose";

let collection ='users3'
let schema = new Schema({
    name:{type:String,required:true},
    lastname:{type:String,required:false}, // This false by singin of google that why google is opcional lastname//
    email:{type:String,required:true},
    password:{type:String,required:true},
    photo:{type:String,required:true},
    country:{type:String,required:false},
    online:{type: Boolean},
    googleAccount: { type: Boolean, default: false },

},{
    timestamps: true
})
let User = model(collection,schema)

export default User