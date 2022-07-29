const dotenv = require("dotenv");

const mongo = {
    uri: process.env.MONGO_DB_URI
  };
const archivo = {
    directorio: "./src/db/json",
  };
  
module.export =  mongo, archivo ;

dotenv.config();

module.exports = {
    PORT: +process.env.PORT || 8080,
};