const sequelize = require("sequelize");
const { DataTypes, Model } = sequelize;
const iSequelize = require("../config/sequelize.js");
const User = require("./User.js");

class Post extends Model {}
Post.init(
  {
    id: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
  
  title: DataTypes.STRING,
  desc: DataTypes.STRING,
  },
  {
    sequelize: iSequelize,
  }
);

Post.belongsTo(User, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
});

User.hasMany(Post);

module.exports = Post;
