# mytinerary-back-DiegoLopez
Sprint 2 Backend

Install FrontEnd 
// Intall for terminal Node.js//
npm create vite@latest -- --template

cd nombre-del-proyecto
npm install

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
//Changes to tailwind.config.js file//

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


// Changes to index.css file//

@tailwind base;
@tailwind components;
@tailwind utilities;

//Don´t copy ":"//
npm install react-router-dom: To manage navigation between different pages in a React application.

npm install prop-types : To use type validation with PropTypes in your React components.

npm install redux react-redux : If you are using Redux to manage the global state of your application.

npm install axios :  To make HTTP requests in your application.

npm install react-toastify @react-oauth/google @reduxjs/toolkit react-icons   for google "cooming soon".

# DiegoLopezBackEnd
Ejercites for backend

Run Terminal
npm install express

ctrl+c To close server

npm install --save-dev nodemon

npm install dotenv

npm install mongoose

npm i cors

npm i morgan

npm install concurrently --save-dev 

Create .env and copypages to \mytinerary-back-DiegoLopez\mytinerary-Diego

copy and paste in .env see bellow ->

->  PORT =8080
    URI_MONGO = "mongodb+srv://DiegoLopezZ:Chiquis1@bsddiego.yvcjp.mongodb.net/prueba1"
    VITE_API_URL= "http://localhost:8080/api/cities/all"

How you use?

1- First you have to upload the data to morgan (npm run dataStores)
2- position to cd mytinerary-Diego
3- Second you have to (npm run dev)
4- third use of api in postman




example for feedback 
for update now:

localhost:8080/api//itenary/update

you need paste to postman type send put 

  {
    "admin_id":"1234567891011121314151617181920",
    "price": 600
 }

for find intenary now:

localhost:8080/api/itenary/all
localhost:8080/api/itenary/name/Mexico City
localhost:8080/api/itenary/admin_id/1234567

for create itenary now:

localhost:8080/api/itenary/create
  {
            "admin_id": "1234567891011121314151617181920",
            "name": "Diego",
            "myphoto": "https://randomuser.me/api/portraits/men/3.jpg",
            "time": 480,
            "likes": 0,
            "hashtags": [
                "#Food",
                "#Tradition",
                "#Bussines"
            ],
            "city": "Mexico City",
            "price": 300
 }
note: you can't write same admin_id because of error 409, you cant wirte 
"admin_id": "123456789101112131415161718192021",

for deleted itenary now:

localhost:8080/api/itenary/deleteOne
 {
  "admin_id": "1234567891011121314151617181920"
 }
note: checked if you registed to data this admin_id try you localhost:8080/api/itenary/admin_id/1234567891011121314151617181920 if not try created

localhost:8080/api/citie/all
localhost:8080          /api           /products           /all
(Adjust depend your cp) (api)     (Changess to models) (condiction)
