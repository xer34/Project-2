var db = require("../models");
const passport = require('passport');

module.exports = function(app) {
  // Get all examples
  app.get("/api/players", function(req, res) {
    db.Player.findAll({}).then(function(players) {
      res.json(players);
    });
  });

  // Create a new example
  app.post("/api/players", function(req, res) {
    db.Player.create(req.body).then(function(players) {
      res.json(players);
    });
  });

  // POST route for saving a new post
  app.post("/api/players/:id", function(req, res) {
    db.Player.update(
      {name: req.body.Player },
      {where: {googleId: profile.id}}
    ).then(function(dbPost) {
      res.json(dbPost);
    });
  });



};

