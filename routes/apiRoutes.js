var db = require("../models");

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
};
