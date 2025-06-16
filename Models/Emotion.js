const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Emotion = sequelize.define('Emotion', {
  data: {
    type: DataTypes.STRING,
    allowNull: false
  },
  humor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Emotion;
