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


How you use?

1- First you have to upload the data to morgan (npm run dataStores)
2- Second you have to (npm run dev)
3- third use of api in postman

localhost:8080/api/products/all
localhost:8080          /api           /products           /all
(Adjust depend your cp) (api)     (Changess to models) (condiction)
