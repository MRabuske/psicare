const Sequelize = require('sequelize');
const { Sequelize } = require('sequelize');// Importando Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

module.exports = sequelize;