//call the libraries
const sequelize = require("../config/connection.js");
const { User, Post, Comment } = require("../models");

//call the JSON files
const userData = require("./userData.json");
const postData = require("./postData.json");
const commentData = require("./commentData.json");

//bulk create statements to seed database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
