'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class etag extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  etag.init({
    etag: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'etag',
  });
  return etag;
};