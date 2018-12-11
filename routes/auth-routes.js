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
  res.redirect('/home/' + req.user.googleId);
  console.log(req.user.name)
  console.log(req.user.id)

    // res.redirect('/home');


});





module.exports = router;
