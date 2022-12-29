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
//route for "api/blogpost/:id", when a blogpost is deleted
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy({ where: { id: req.params.id } });
    res.status(200).json(deletePost);
  } catch (error) {
    res.status(500).json(error);
  }
});
//route for "api/blogpost/:id", when a blogpost is edited
//user must be logged in
router.put("/:id", withAuth, async (req, res) => {
  try {
    const editBlogPost = await Post.update(
      {
        post_title: req.body.editedBlogTitle,
        post_content: req.body.editedBlogText,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json(editBlogPost);
  } catch (error) {
    res.status(500).json(err);
  }
});
module.exports = router;
