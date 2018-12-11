const router = require("express").Router();
const passport = require("passport");

// auth with google+
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);


router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/home/' + req.user.googleId + '/classes');

});

module.exports = router;
