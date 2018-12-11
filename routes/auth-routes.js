const router = require("express").Router();
const passport = require("passport");

// auth with google+
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

router.get('/google/redirect', 
  passport.authenticate('google', {
      successRedirect: '/classes',
      failureRedirect: '/404'
  }))

  // router.get('/google/redirect', 
  // passport.authenticate('google', { failureRedirect: '/404' }),
  // function(req, res) {
  //   res.redirect('/');
  // });
  

module.exports = router;
