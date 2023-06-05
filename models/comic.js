'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  comic.init({
    etag: DataTypes.STRING,
    comic_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: DataTypes.STRING,
    created_date: DataTypes.DATE,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comic',
  });
  return comic;
};