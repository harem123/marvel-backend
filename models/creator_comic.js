'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class creator_comic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  creator_comic.init({
    comic_id: DataTypes.STRING,
    creator_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'creator_comic',
  });
  return creator_comic;
};