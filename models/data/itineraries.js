import 'dotenv/config.js'
import '../../config/database.js'
import Itineraries from "../Itineraries.js"

const itineraries = [
    {
    admin_id:"12345",
    name:"Kadir",
    myphoto: "https://randomuser.me/api/portraits/men/98.jpg",
    time:480,
    likes:0,
    hashtags:["#Food","#likedArg","#MindHub" ],
    city:"Buenos Aires",
    price:200,
    },
    {
        admin_id:"123456",
        name:"Hunter",
        myphoto: "https://randomuser.me/api/portraits/men/3.jpg",
        time:480,
        likes:0,
        hashtags:["#Carnaball","#Dances","#It's Sao" ],
        city:"São Paulo",
        price:200,
    },
    {
        admin_id:"1234567",
        name:"Diego",
        myphoto: "https://randomuser.me/api/portraits/men/3.jpg",
        time:480,
        likes:0,
        hashtags:["#Food","#Tradition","#Bussines" ],
        city:"Mexico City",
        price:300,
    },
    {
        admin_id:"12345678",
        name:"Carlos",
        myphoto: "https://randomuser.me/api/portraits/men/3.jpg",
        time:480,
        likes:0,
        hashtags:["#Food","#Natural","#Peace" ],
        city:"Bogotá",
        price:300,
    },
    {
        admin_id:"123456789",
        name:"Sherri",
        myphoto: "https://randomuser.me/api/portraits/men/3.jpg",
        time:480,
        likes:0,
        hashtags:["#Food","#Natural","#Peace"],
        city:"Lima",
        price:200,
    },
    {
        admin_id:"12345678910",
        name:"Santiago",
        myphoto: "https://randomuser.me/api/portraits/men/3.jpg",
        time:480,
        likes:0,
        hashtags:["#Food","#Chile","#Paces" ],
        city:"Chile",
        price:350,
        
    },
    {
        admin_id:"1234567891011",
        name:"Sander",
        myphoto: "https://randomuser.me/api/portraits/men/3.jpg",
        time:480,
        likes:0,
        hashtags:["#Montevideo","#Traditional","#Culture" ],
        city: "Montevideo",
        price:200,
    },
    {
        admin_id:"123456789101112",
        name:"Sanchez",
        myphoto: "https://randomuser.me/api/portraits/men/3.jpg",
        time:480,
        likes:0,
        hashtags:["#Culture","#Song","#Fooood" ],
        city: "Quito",
        price:250,
    },
    {
        admin_id:"12345678910111213",
        name:"Garza",
        myphoto: "https://randomuser.me/api/portraits/men/3.jpg",
        time:480,
        likes:0,
        hashtags:["#Travel","#Resort","#Beach" ],
        city: "Caracas",
        price:200,
    },
    {
        admin_id:"1234567891011121314",
        name:"Garza",
        myphoto: "https://randomuser.me/api/portraits/men/3.jpg",
        time:480,
        likes:0,
        hashtags:["#It's la paz","#Travale","#Beautiful" ],
        city: "La Paz",
        price:200,
    },
    {
        admin_id:"123456789101112131415",
        name:"Pablo",
        myphoto: "https://randomuser.me/api/portraits/men/3.jpg",
        time:480,
        likes:0,
        hashtags:["#Tradiction","#Food","#Anywhere" ],
        city: "Asunción",
        price:300,
    },
    {
        admin_id:"12345678910111213141516",
        name:"Garza",
        myphoto: "https://randomuser.me/api/portraits/men/3.jpg",
        time:480,
        likes:0,
        hashtags:["#food","#Travel","#Its colombia" ],
        city: "Medillín",
        price:200,
    },
    {
        admin_id:"1234567891011121314151617",
        name:"آیناز",
        myphoto: "https://randomuser.me/api/portraits/women/37.jpg",
        time:480,
        likes:0,
        hashtags:["#Culture","#ChinesseFo'd","#Naturals" ],
        city:"Beijing",
        price:500,
    },
    {
        admin_id:"123456789101112131415161718",
        name:"Joseph",
        myphoto: "https://randomuser.me/api/portraits/women/37.jpg",
        time:480,
        likes:0,
        hashtags:["#Beach","#Travel","#Resort" ],
        city:"Sydney",
        price:800,
    }
  ]
  
  Itineraries.insertMany(itineraries)