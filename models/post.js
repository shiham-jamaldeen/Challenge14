const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const user = require("../models/user.js");
class Post extends Model {}

Post.init(
  //db fields post_id, title, content, date_created and user_id(FK)
  {
    post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    post_title: { type: DataTypes.STRING, allowNull: false },

    post_content: { type: DataTypes.STRING, allowNull: false },

    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNulll: false,
      references: { model: "user", key: "id" },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);
module.exports = Post;
