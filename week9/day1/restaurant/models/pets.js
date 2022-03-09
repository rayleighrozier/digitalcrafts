"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pets.init(
    {
      type: DataTypes.STRING,
      species: DataTypes.STRING,
      name: DataTypes.STRING,
      age: DataTypes.STRING,
      ownerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "pets",
    }
  );
  return pets;
};
