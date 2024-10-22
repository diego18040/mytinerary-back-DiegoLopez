import mongoose from "mongoose";

let url = process.env.URI_MONGO

console.log(url);

mongoose.connect(url)
.then(()=> console.log("Conectado a la base de datos"))
.catch(erro => console.log(error))