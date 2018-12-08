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

  app.get("*", function(req, res) {
    res.render("404");
  });
  
};
