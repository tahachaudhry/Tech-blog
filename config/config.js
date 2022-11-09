const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize('heroku_048929a63d8b6fd', 'b0bdf3eabc4d81', '52c84867', {
        host: 'us-cdbr-east-06.cleardb.net',
        dialect: 'mysql',
        port: 3306
    });
}


module.exports = sequelize;

