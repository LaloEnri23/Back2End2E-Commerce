require('dotenv').config({path:"../.env"});

const Sequelize = require('sequelize');
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3006,
      dialectOptions: {
        decimalNumbers: true,
      },
    });


module.exports = sequelize;
