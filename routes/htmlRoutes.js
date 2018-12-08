var isAuthenticated = require("../config/isAuthenticated");
const passport = require("passport");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/classes", function(req, res) {
    res.render("classes");
  });
 
  app.get("/home", isAuthenticated, function(req, res) {
    res.render("home");
  });

  // app.get(
  //   "/auth/google",
  //   passport.authenticate("google", { scope: ["profile", "email"] })
  // );

  // app.get(
  //   "/auth/google/redirect",
  //   passport.authenticate("google", {
  //     successRedirect: "/home",
  //     failureRedirect: "/404"
  //   })
  // );

  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
