"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class owners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  owners.init(
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      location: DataTypes.STRING,
      environment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "owners",
    }
  );
  return owners;
};
