const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('./keys');
var db = require("../models");

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, function(token, tokenSecret, profile, done) {
       
          db.Player
             .findOrCreate({where: {googleId: profile.id}})
             return done();
         
       
        
    }))
