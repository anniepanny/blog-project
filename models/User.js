const sequelize = require("sequelize");
const { DataTypes, Model } = sequelize;
const iSequelize = require("../config/sequelize.js");

class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize: iSequelize,
  }
);
module.exports = User;
