import 'dotenv/config.js';
import '../../config/database.js';
import Countries from '../Countries.js';

const countries = [
    {country:"EUA"},
    {country:"Canada"},
    {country: "España"},
    {country: "Mexico"},
    {country:"Argentina"},
    {country:"Chile"},
    {country:"Colombia"},
    {country:"Peru"},
    {country:"Brazil"},
    {country:"Ecuador"},
    {country: "Venezuela"},
    {country: "Other"}
];
Countries.insertMany(countries)
