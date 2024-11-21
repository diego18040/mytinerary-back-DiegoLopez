import 'dotenv/config.js'
import '../../config/database.js'
import User from '../User.js'

let users3 = [
    {
      name: "Diego Abraham",
      lastname: "Lopez Zambrano",
      email: "1804040diego@gmail.com",
      password: "Norte109",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGCqyhvTQQ3MsXdlgsKndrnfc9JJ5Mp0mTQ&s",
      country:"Mexico"
      
    }
  ];

  User.insertMany(users3)