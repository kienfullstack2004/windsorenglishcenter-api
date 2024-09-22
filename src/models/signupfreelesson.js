'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SignUpFreeLesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SignUpFreeLesson.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    age: DataTypes.STRING,
    isFree: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SignUpFreeLesson',
  });
  return SignUpFreeLesson;
};