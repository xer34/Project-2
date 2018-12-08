var db = require("../models");
const passport = require('passport');

module.exports = function(app) {
  // Get all examples
  app.get("/api/players", function(req, res) {
    db.Player.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/players", function(req, res) {
    db.Player.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // POST route for saving a new post
  app.post("/api/players/:id", function(req, res) {
    console.log(req.body);
    db.Players.update(
      { title: req.body.Player },
      { where: req.params.id }
    ).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Delete an example by id
  app.delete("/api/players/:id", function(req, res) {
    db.Player.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  app.post("/api/login", passport.authenticate("google"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/home");
  });
};

