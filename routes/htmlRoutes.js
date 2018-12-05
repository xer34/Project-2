var db = require("../models");
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });
  app.get("/classes", function(req, res) {
    res.render("classes");
  });
  app.get("*", function(req, res) {
    res.render("404");
  });
};
