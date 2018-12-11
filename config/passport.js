const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const keys = require("./keys");
const db = require("../models");

passport.serializeUser((Player, done) => {
  done(null, Player.googleId);

});

passport.deserializeUser((googleId, done) => {
  db.Player.findOne(googleId).then(user => done(null, Player));
});

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      // callbackURL: "https://quiet-castle-43092.herokuapp.com/auth/google/redirect"
      callbackURL: "/auth/google/redirect"
    },
    function(token, tokenSecret, profile, done) {
        db.Player.findOrCreate({
          where: {
            googleId: profile.id,
            name: profile.displayName,
            xp: 0,
            level: 0
          }
      // db.Player.findOne({ googleId: profile.id }).then(currentUser => {
      //   if (currentUser) {
      //     // already have this user
      //   //   console.log("current user is: ", currentUser);
      //     done(null, currentUser);
      //     // do something
      //   } else {
      //     // if not, create user in our db
      //     db.Player.create({
      //       googleId: profile.id,
      //       name: profile.displayName,
      //       xp: 0,
      //       level: 0
      //     })
      //       .save()
      //       .then(newUser => {
      //       //   console.log("new user created: " + newUser);
      //         done(null, newUser);
      //       });
      //   }
      })
                  .then(Player => {
              console.log("new user created: " + newUser);
              done(null, Player);
            });
    }
  )
);
