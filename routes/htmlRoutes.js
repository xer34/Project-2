const db = require("../models");
const path = require("path")

module.exports = function(app) {
  app.get("/classes", function(req, res) {
    res.sendFile(path.join(__dirname,"../views/classes.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname,"../views/home.html"));
  });


  app.get("/1", function(req, res) {
    res.sendFile(path.join(__dirname,"../views/warrior1.html"));
  });

  app.get("/2", function(req, res) {
    res.sendFile(path.join(__dirname,"../views/warrior2.html"));
  });

  app.get("/3", function(req, res) {
    res.sendFile(path.join(__dirname,"../views/warrior3.html"));
  });

  app.get("/4", function(req, res) {
    res.sendFile(path.join(__dirname,"../views/wizard3.html"));
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
