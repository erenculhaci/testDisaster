const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('communication_tower_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
