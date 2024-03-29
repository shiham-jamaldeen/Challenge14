const { Model, DataTypes, DATEONLY } = require("sequelize");
const sequelize = require("../config/connection.js");
const user = require("../models/user.js");
const post = require("../models/post.js");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
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
    post_id: {
      type: DataTypes.INTEGER,
      allowNulll: false,
      references: { model: "post", key: "id" },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);
module.exports = Comment;
