const router = require("express").Router();
const withAuth = require("../utils/auth.js");
const { User, Post, Comment } = require("../models");

//route for "/", this for displaying posts and comments from
//the dashboard when the user is not logged in
router.get("/", async (req, res) => {
  try {
    const getAllBlogPostsData = await Post.findAll({
      include: [{ model: User }],
    });
    //serialise the data structure
    const allBlogPosts = getAllBlogPostsData.map((blogPost) =>
      blogPost.get({ plain: true })
    );
    //display the data structure
    res.render("homepage", { allBlogPosts, logged_in: req.session.logged_in });
  } catch (error) {
    res.status(500).json(error);
  }
});
//route for "/login"
router.get("/login", (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("login");
  } catch (error) {
    res.status(500).json(error);
  }
});
//route for "/dashboard" , when the user has logged in
//display posts only those created by the user
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const getPostData = await Post.findAll({
      where: { user_id: req.session.user_id },
    });
    //serialise data
    const getAllPostsForUser = getPostData.map((blogPost) =>
      blogPost.get({ plain: true })
    );
    res.render("dashboard", {
      getAllPostsForUser,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//route for "/dashboard/id:, when the user has logged in
//display only for those created by the user
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const getIndividualPostData = await Post.findByPk(req.params.id);

    const individualBlogPost = getIndividualPostData.get({ plain: true });

    const getCommentForBlogPostData = await Comment.findAll({
      where: { post_id: req.params.id },
      include: { model: User },
    });

    const commentForBlogPosts = getCommentForBlogPostData.map((comment) =>
      comment.get({ plain: true })
    );

    res.render("blogpost", {
      individualBlogPost,
      commentForBlogPosts,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
