'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      News.belongsTo(models.Images,{foreignKey:'idImage',targetKey:'id',as:'dataImage'})
    }
  }
  News.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    codeYTB: DataTypes.STRING,
    idImage: DataTypes.STRING,
    links: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};