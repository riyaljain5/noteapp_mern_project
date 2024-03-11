var express = require('express');
var router = express.Router();
const userModel = require("./users");
const noteModel = require("./notes");
const passport = require('passport');
const localStrategy = require("passport-local").Strategy;

passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup' );
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get("/home", isLoggedIn, function(req, res, next){
  res.render('home');
});

router.post("/signup", function(req, res){
  const { username, email, password } = req.body;
  const userData = new userModel({username, email});

  userModel.register(userData, password)
  .then(function(){
    passport.authenticate("local")(req, res, function(){
      res.redirect("/home");
    });
  })
  .catch(function(err){
    console.error("Error in user registration:", err);
    res.redirect('/signup'); // Redirect to signup page on error
  });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/home",
  failureRedirect: "/", // Redirect to login page on failure
}));



router.get("/logout", function(req, res, next){
  req.logout(); // Simply call logout without a callback
  res.redirect('/');
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login"); // Redirect to login page if not authenticated
}

module.exports = router;











