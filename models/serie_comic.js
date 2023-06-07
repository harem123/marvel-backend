'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serie_comic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  serie_comic.init({
    comic_id: DataTypes.STRING,
    serie_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'serie_comic',
  });
  return serie_comic;
};