//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home");
})

app.get("/gallery", function(req, res) {
  res.render("gallery");
})

app.get("/activities", function(req, res) {
  res.render("activities");
})

app.post("/activities", function(req, res) {
  console.log("pressed");
  res.redirect("activities-result");
})

app.get("/activities-result", function(req, res) {

  var randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);

  switch (randomNumber) {
    case 0:
      randomActivity = "Go on a picnic!";
      break;

    case 1:
      randomActivity = "Go for a hike!";
      break;

    case 2:
      randomActivity = "Cook a meal together!";
      break;

    case 3:
      randomActivity = "Try a new recipe together!";
      break;

    case 4:
      randomActivity = "Play a game of Civ!";
      break;

    case 5:
      randomActivity = "Snuggle up at home and read a book!";
      break;

    case 6:
      randomActivity = "Listen to a podcast episode!";
      break;

    case 7:
      randomActivity = "Put on a movie from your To-Watch List!";
      break;

    case 8:
      randomActivity = "Admire the furniture and eat Swedish meatballs at IKEA!";
      break;

    case 9:
      randomActivity = "Visit a museum exhibit that you haven't seen yet!";
      break;

    case 10:
      randomActivity = "Go for a scenic bike ride!";
      break;

    case 11:
      randomActivity = "Go for a leisurely walk around the neighborhood!";
      break;

    case 12:
      randomActivity = "Wander along a beach town!";
      break;

    case 13:
      randomActivity = "Browse a bookstore!";
      break;

    case 14:
      randomActivity = "Eat out at a nice cafe!";
      break;

    case 15:
      randomActivity = "Enjoy a spa day!";
      break;

    case 16:
      randomActivity = "Attend a musical event or concert!";
      break;

    case 17:
      randomActivity = "Settle in for a quiet work session!";
      break;

    case 18:
      randomActivity = "Go out for ice cream!";
      break;

    case 19:
    randomActivity = "Go out for yummy milk tea!";
    break;

    case 20:
    randomActivity = "Watch the next episode of a TV show!";
    break;

    case 21:
    randomActivity = "Hop in the car and take a day trip somewhere new!";
    break;

    case 22:
    randomActivity = "Try a new restaurant!";
    break;

    case 23:
    randomActivity = "Grab a blanket and relax at a park!";
    break;

    case 24:
    randomActivity = "Visit the library!";
    break;

    case 25:
    randomActivity = "Take turns answering questions from your '3000 Questions' book!";
    break;

    case 26:
    randomActivity = "Play a 2-player board or card game!";
    break;

    case 27:
    randomActivity = "PORG OUT";
    break;

    case 28:
    randomActivity = "Seduce each other! ;)";
    break;

    case 29:
    randomActivity = "Take a nap, koala-style!";
    break;

    case 30:
    randomActivity = "Do a meditation session (and try not to fall asleep)!";
    break;

    case 31:
    randomActivity = "Try out a new video game!";
    break;

    case 32:
    randomActivity = "Sit your butt down and code!";
    break;

    case 33:
    randomActivity = "Treat yourselves to a milkshake!";
    break;

    case 34:
    randomActivity = "Team up and clean around the apartment!";
    break;

    case 35:
    randomActivity = "Browse reddit! (May I recommend /mildlyinteresting?)";
    break;

    case 36:
    randomActivity = "Stroll around Pasadena!";
    break;

    case 37:
    randomActivity = "Watch a musical or play!";
    break;

    case 38:
    randomActivity = "Get awesome Chinese food in the SGV!";
    break;

    case 39:
    randomActivity = "Share some of your favorite videos or memes!";
    break;

    case 40:
    randomActivity = "Watch a documentary!";
    break;

    case 41:
    randomActivity = "Try a new Pinterest-worthy DIY project!";
    break;

    case 42:
    randomActivity = "Browse around a mall!";
    break;

    case 43:
    randomActivity = "Go to the movie theaters!";
    break;

    case 44:
    randomActivity = "Write a letter to each other!";
    break;

    case 45:
    randomActivity = "Order takeout and watch a movie!";
    break;

    case 46:
    randomActivity = "Plan the ultimate date day for each other!";
    break;

    case 47:
    randomActivity = "Share 5 things you like about each other!";
    break;

    case 48:
    randomActivity = "Order food from one of your favorite restaurants!";
    break;

    case 49:
    randomActivity = "Go for a leisurely swim at the pool!";
    break;

    case 50:
    randomActivity = "Visit your favorite spots around UCLA or Westwood!";
    break;

    case 51:
    randomActivity = "Update the adventure book together!";
    break;

    case 52:
    randomActivity = "Plan your next vacation or weekend getaway together!";
    break;

    case 53:
    randomActivity = "Go grocery shopping at H-Mart!";
    break;

    case 54:
    randomActivity = "Go bird-watching!";
    break;

    case 55:
    randomActivity = "Go people-watching!";
    break;

    case 56:
    randomActivity = "Find a new outdoor location to explore!";
    break;

    case 57:
    randomActivity = "Catch the sunset or sunrise!";
    break;

    case 58:
    randomActivity = "Have fun at a theme park!";
    break;

    case 59:
    randomActivity = "Visit the Getty Center or Huntington Library!";
    break;

    case 60:
    randomActivity = "Walk around Exposition Park!";
    break;

    case 61:
    randomActivity = "Stroll around the Venice Canals!";
    break;

    case 62:
    randomActivity = "Spend a day exploring the city via public transit!";
    break;

    case 63:
    randomActivity = "Grab grub from a food truck!";
    break;

    case 64:
    randomActivity = "Roam around Santa Monica!";
    break;

    case 65:
    randomActivity = "Discover a new scenic vista or lookout point!";
    break;

    case 66:
    randomActivity = "Grab a meal at Grand Central Market!";
    break;

    case 67:
    randomActivity = "Enjoy a day at a garden!";
    break;

    case 68:
    randomActivity = "Spend some time in K-town!";
    break;

    case 69:
    randomActivity = "Spend the day wandering around Little Tokyo!";
    break;

    case 70:
    randomActivity = "Check out an observatory!";
    break;

    case 71:
    randomActivity = "Visit a zoo or aquarium!";
    break;

    case 72:
    randomActivity = "Play some music together!";
    break;

    case 73:
    randomActivity = "Find and visit a local farmer's market!";
    break;

    case 74:
    randomActivity = "Find a free local event to attend!";
    break;

    case 75:
    randomActivity = "Enjoy a comedy show!";
    break;

    case 76:
    randomActivity = "Go rollerskating or ice skating!";
    break;

    case 77:
    randomActivity = "Spend a day at a state park!";
    break;

    case 78:
    randomActivity = "Check out a new place from Atlas Obscura!";
    break;

    case 79:
    randomActivity = "Wander aimlessly and chat the day away!";
    break;

    case 80:
    randomActivity = "Do something you've always wanted to try but never done!";
    break;

    case 81:
    randomActivity = "Be spontaneous! :)";
    break;

    case 82:
    randomActivity = "Surprise each other by doing or giving something thoughtful!";
    break;

    case 83:
    randomActivity = "Learn something new together!";
    break;

    case 84:
    randomActivity = "Go on a scavenger hunt!";
    break;

    case 85:
    randomActivity = "Dress up for a random fancy night out!";
    break;

    case 86:
    randomActivity = "Give each other massages!";
    break;

    case 87:
    randomActivity = "Watch videos of cute animals!";
    break;

    case 88:
    randomActivity = "Pull up old photos and share them with each other!";
    break;

    case 89:
    randomActivity = "Prepare a fun snack for each other!";
    break;

    case 90:
    randomActivity = "Deep stretch or do yoga together!";
    break;

    case 91:
    randomActivity = "Go to Target and buy a gift under $10 for each other!";
    break;

    case 92:
    randomActivity = "Teach each other something new!";
    break;

    case 93:
    randomActivity = "Invite a few friends to hang out!";
    break;

    case 94:
    randomActivity = "Take the Porg Quiz!";
    break;

    case 95:
    randomActivity = "Try a new outdoor activity like rock climbing or kayaking!";
    break;

    case 96:
    randomActivity = "Read outdoors!";
    break;

    case 97:
    randomActivity = "Update the photo gallery!";
    break;

    case 98:
    randomActivity = "Snap a new bread-in-bird-mouth photo!";
    break;

    case 99:
    randomActivity = "Help each other complete a task from your to-do lists!";
    break;

    default:
      randomActivity = "Whatever you do today, enjoy it :)";
  }

  res.render("activities-result", {
    randomActivity: randomActivity
  });

})

app.post("/activities-result", function(req, res) {
  res.redirect("activities");
})

app.get("/porg", function(req, res) {
  res.render("porg");
})

app.get("/weather", function(req, res) {
  res.render("weather");
})

app.get("/adventure", function(req, res) {
  res.render("adventure");
})

app.get("/calendar", function(req, res) {
  res.render("calendar");
})









app.listen(3000, function() {
  console.log("Server started on port 3000");
});
