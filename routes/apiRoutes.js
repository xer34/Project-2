var db = require("../models");
const passport = require('passport');

module.exports = function(app) {
  // Get all examples
  app.get("/api/players", function(req, res) {
    db.Player.findAll({}).then(function(players) {
      res.json(players);
    });
  });

  app.get("/api/warriors", function(req, res) {
    db.Player.findAll({}).then(function(warriors) {
      res.json(warriors);
    });
  });

  // Create a new example
  app.post("/api/players", function(req, res) {
    db.Player.create(req.body).then(function(players) {
      res.json(players);
    });
  });


  // POST route for saving a new post
  app.post("/api/:id/warriors", function(req, res) {
    db.Player.update(
      {class: "Warrior"},
      {where: { googleId: req.params.id }}
    ).then(function(dbPost) {
      res.json(dbPost);
    });
  });



};

