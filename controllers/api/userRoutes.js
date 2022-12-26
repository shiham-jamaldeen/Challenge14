const router = require("express").Router();
const { User } = require("../../models");

//User route when user logs in
router.post("/login", async (req, res) => {
  try {
    const isUserEmail = await User.findOne({
      where: { email: req.body.email },
    });

    if (!isUserEmail) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const isUserPassword = await isUserEmail.checkPassword(req.body.password);

    if (!isUserPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = isUserEmail.id;
      req.session.logged_in = true;

      res.json({ user: isUserEmail, message: "You are now logged in!" });
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
