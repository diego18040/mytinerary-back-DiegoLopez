
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
2- position to cd MYTINERARY-BACK-DIEGOLOPEZ
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
