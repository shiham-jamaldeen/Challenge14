const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth.js");

//route for "api/blogpost" to record
//when the user is logged in
router.post("/", withAuth, async (req, res) => {
  try {
    const newBlogPost = await Post.create({
      post_title: req.body.blogPostTitle,
      post_content: req.body.blogPostText,
      user_id: req.session.user_id,
    });
    res.status(200).json(newBlogPost);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
