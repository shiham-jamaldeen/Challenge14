const User = require("./user.js");
const Post = require("./post.js");
const Comment = require("./comment.js");

// user and post relationship
User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id" });

//user and comment relationship
User.hasMany(Comment, { foreignKey: "user_id" });
Comment.belongsTo(User, { foreignKey: "user_id" });

//post and comment relationship
//delete all comments when a post deleted
Post.hasMany(Comment, { foreignKey: "post_id", onDelete: "cascade" });
Comment.belongsTo(Post, { foreignKey: "post_id" });

module.exports = { User, Post, Comment };
