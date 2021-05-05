const Sequelize = require('sequelize');
require('dotenv');

let sequelize;

sequelize = new Sequelize (
    process.env.DBNAME,
    process.env.DBUSER,
    process.env.DBPASS,

    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);