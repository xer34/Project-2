require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const passportSetup = require("./config/passport");
const authRoutes = require("./routes/auth-routes");
const passport = require("passport");
const cookieSession = require("cookie-session")
const keys = require("./config/keys.js");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session())

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}))

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
app.use("/auth", authRoutes);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
