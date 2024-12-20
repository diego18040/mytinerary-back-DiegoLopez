import 'dotenv/config.js'
import '../../config/database.js'
import Cities from '../Cities.js';

const cities = [
  {
      city: "Buenos Aires",
      country: "Argentina",
      description: "Buenos Aires, the capital of Argentina, is renowned for its vibrant architecture and culture. It's a city that never sleeps, pulsating with life day and night.",
      foundation: "1536-02-02",
      population: 2891000,
      photo: "https://c4.wallpaperflare.com/wallpaper/856/590/514/night-lights-road-tower-wallpaper-preview.jpg",
  },
  {
      city: "São Paulo",
      country: "Brazil",
      description: "São Paulo, the largest city in Brazil, is celebrated for its cultural and economic diversity. Skyscrapers dot the skyline, reflecting the city's modernity.",
      foundation: "1554-01-25",
      population: 12325232,
      photo: "https://www.benoitproperties.com/wp-content/uploads/2023/09/sao-paulo-header.png",
      
  },
  {
      city: "Mexico City",
      country: "Mexico",
      description: "Mexico City, the capital of Mexico, is steeped in history while embracing modernity. Its streets teem with stories from ancient civilizations to contemporary art.",
      foundation: "1325-07-13",
      population: 8918653,
      photo: "https://puntodestino.com.mx/wp-content/uploads/2021/03/cdmx.jpg",
      
  },
  {
      city: "Bogotá",
      country: "Colombia",
      description: "Bogotá, the capital of Colombia, nestles in the Andes, offering breathtaking views. It's a city where history and nature coexist in perfect harmony.",
      foundation: "1538-08-06",
      population: 7282406,
      photo: "https://blog.urbansa.co/hubfs/Centro%20de%20la%20ciudad%20-%20El%20centro%20de%20Bogot%C3%A1-Bogot%C3%A1%20de%20noche.jpg",
      
  },
  {
      city: "Lima",
      country: "Peru",
      description: "Lima, the capital of Peru, is a tapestry of pre-Columbian and colonial history. Its streets whisper tales of ancient civilizations and Spanish conquests.",
      foundation: "1535-01-18",
      population: 9120500,
      photo: "https://media.traveler.es/photos/62e73e0ea031e21bace83a5f/16:9/w_1999,h_1124,c_limit/Qu%C3%A9-hacer-en-Lima-Per%C3%BA.jpg",
      
  },
  {
      city: "Santiago",
      country: "Chile",
      description: "Santiago, the capital of Chile, cradles in the embrace of the Andes. A city where modernity meets the majesty of the mountains.",
      foundation: "1541-02-12",
      population: 6411744,
      photo: "https://c0.wallpaperflare.com/preview/757/846/354/costanera-center-chile-santiago-de-chile-costanera.jpg",
      
  },
  {
      city: "Montevideo",
      country: "Uruguay",
      description: "Montevideo, the capital of Uruguay, is a city of sandy beaches and colonial architecture. Each corner whispers stories of a rich maritime history.",
      foundation: "1724-12-24",
      population: 1364064,
      photo: "https://c0.wallpaperflare.com/preview/124/274/410/montevideo-uruguay-latina-city.jpg",
      
  },
  {
      city: "Quito",
      country: "Ecuador",
      description: "Quito, the capital of Ecuador, cradles in a valley surrounded by volcanoes. It's a city where history meets the untamed beauty of nature.",
      foundation: "1534-12-06",
      population: 2760806,
      photo: "https://c1.wallpaperflare.com/preview/708/930/525/quito-city-panoramic-landscape.jpg",
      
  },
  {
      city: "Caracas",
      country: "Venezuela",
      description: "Caracas, the capital of Venezuela, rests in a mountainous valley. It's a city where vibrant culture thrives amidst breathtaking natural beauty.",
      foundation: "1567-07-25",
      population: 2851585,
      photo: "https://c4.wallpaperflare.com/wallpaper/80/807/657/america-caracas-ciudad-sur-wallpaper-preview.jpg",
      
  },
  {
      city: "La Paz",
      country: "Bolivia",
      description: "La Paz, the capital of Bolivia, stands as the highest capital city in the world. Its streets are alive with the energy of a unique blend of cultures.",
      foundation: "1548-10-20",
      population: 878364,
      photo: "https://c4.wallpaperflare.com/wallpaper/707/936/38/la-paz-city-bolivia-city-cityscape-hd-wallpaper-preview.jpg",
      
  },
  {
      city: "Asunción",
      country: "Paraguay",
      description: "Asunción, the capital of Paraguay, rests on the banks of the Paraguay River. It's a city where history echoes through colonial architecture and vibrant markets.",
      foundation: "1537-08-15",
      population: 525294,
      photo: "https://c0.wallpaperflare.com/preview/753/186/472/paraguay-ciudad-del-este-phone-photo-shoot.jpg",
      
  },
  {
      city: "Cuzco",
      country: "Peru",
      description: "Cuzco, the ancient capital of the Inca Empire, is adorned with mesmerizing ruins and colonial architecture. It's a city where every stone tells a story.",
      foundation: "1000-01-01",
      population: 428450,
      photo: "https://c4.wallpaperflare.com/wallpaper/403/28/991/green-leaf-tree-near-body-of-water-during-daytime-colombia-colombia-wallpaper-preview.jpg",
      
  },
  {
      city: "Medellín",
      country: "Colombia",
      description: "Medellín, an innovative and modern city in Colombia, is cradled by the Andes. It's a city where innovation thrives amidst the beauty of nature.",
      foundation: "1616-03-02",
      population: 2496303,
      photo: "https://c4.wallpaperflare.com/wallpaper/85/101/144/medellin-republic-of-colombia-wallpaper-preview.jpg",
      
  },
  {
      city: "Rio de Janeiro",
      country: "Brazil",
      description: "Rio de Janeiro, famous for its iconic beaches and the statue of Christ the Redeemer, is a city where nature and culture blend in perfect harmony.",
      foundation: "1565-03-01",
      population: 6747815,
      photo: "https://c4.wallpaperflare.com/wallpaper/389/22/532/travel-tourism-christ-the-redeemer-brazil-wallpaper-preview.jpg",
      
  },
  {
      city: "Havana",
      country: "Cuba",
      description: "Havana, the capital of Cuba, boasts a rich history and colonial architecture. It's a city where time seems to stand still, preserving its unique charm.",
      foundation: "1515-11-16",
      population: 2135498,
      photo: "https://c4.wallpaperflare.com/wallpaper/730/430/537/havana-cuba-sunrise-wallpaper-preview.jpg",
      
  },
  {
      city: "Beijing",
      country: "China",
      description: "Embark on a journey through dynasties as you explore the intricate architecture of ancient temples and walk along the iconic Great Wall. Delve into the flavors of authentic Chinese cuisine in local markets.",
      language: "Mandarin Chinese",
      foundation: "1949-10-01",
      population: 1444216107,
      photo: "https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic2710344.jpg?w=1600",
      
  },
  {
      city: "Sydney",
      country: "Australia",
      description: "The Sydney Opera House is one of the most distinctive and famous 20th-century buildings, and one of the most famous performing arts venues in the world.",
      language: "English",
      foundation: "1788-01-26T00:00:00.000Z",
      population: 5312000,
      photo: "https://i.im.ge/2022/08/31/OE8JpC.sidney.png",
      
  }
]

Cities.insertMany(cities)