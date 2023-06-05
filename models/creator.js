'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class creator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  creator.init({
    creator_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    resource_uri: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'creator',
  });
  return creator;
};