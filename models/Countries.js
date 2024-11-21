import { Schema, model } from "mongoose";

let collection = 'countries';
let schema = new Schema({
    country: { type: String, required: true },
    user: [{ type: Schema.Types.ObjectId, ref: 'users3', required: false }] // Array de ObjectId
}, {
    timestamps: true
});

let Countries = model(collection, schema);

export default Countries;
