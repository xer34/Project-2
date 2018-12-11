const db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("splash");
  });

  app.get("/home/:id", function(req, res) {
    db.Player.findOne({ where: { googleId: req.params.id } }).then(function(googleId) {
      res.render("home", {
        Player : googleId
      });
    });
  });

  app.get("/home/:id/classes", function(req, res) {
    db.Player.findOne({ where: { googleId: req.params.id } }).then(function(googleId) {
      res.render("classes", {
        Player : googleId
      });
    });
  });

  app.get("/warrior2", function(req, res) {
    res.render("warrior2");
  });

  app.get("/warrior3", function(req, res) {
    res.render("warrior3");
  });

  app.get("/wizard4", function(req, res) {
    res.render("wizard4");
  });

  app.get("/quests", function(req, res) {
    res.render("quests");
  });
  

  app.get("*", function(req, res) {
    res.render("404");
  });
};
