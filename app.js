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

  let randomNumber = Math.floor(Math.random() * 100);

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

  let randomNumber = Math.floor(Math.random() * 5);
  res.render("porg-quiz-" + randomNumber);

})

app.post("/porg", function(req, res) {

  let porgMood = req.body.selection;
  const porgType = porgMood + " Porg";

  switch (porgMood) {

    case "adorable":
      porgDescription = "Picture porg-fect is the only way to describe you. From your gargantuan googly eyes to your flailing flappers, everything about you screams 'a-porgable.' Throw in that distinctive warbling wail of yours and your porg charm is out of this galaxy!"
      break;

    case "affectionate":
      porgDescription = "Snuggles, cuddles, cozying, nuzzling--there's nothing you love more than displaying your porgly affection. Whether it's showering your porg partner with a rainfall of kisses or telling them that they're your favorite porg-son, you want all of Ahch-To to know how affectionate you're feeling today!";
      break;

    case "awkward":
      porgDescription = "If you thought Awkward Penguin was awkward, you might want to take a look in the bathroom mirror. Sheldon Cooper worships you, and you have an uncanny knack for saying the exact wrong thing at the exact wrong time. (Remember that lady that you congratulated for her upcoming arrival? Yeah, she wasn't pregnant.) You also flap your wings a lot, which...yeah, makes you look pretty awkward most of the time. Derp.";
      break;

    case "friendly":
      porgDescription = "What an amiable porg you are! Everyone knows you as the flock's social butterfly, and you go out of your way to wail hello to every porg on the island. You've even managed to befriend the Awkward Porg, which is no mean feat (and definitive proof that your social charm is out of this galaxy).";
      break;

    case "hungry":
      porgDescription = "You might be a beakless bird, but that doesn't prevent you from feeling peckish. All. The. Time. Sometimes you can't tell whether that loud warbling noise is coming from your mouth or your stomach, and you spend most of your waking hours dreaming about Chewie Bars or Chocolate Chip Wookies.";
      break;

    case "introspective":
      porgDescription = "Quiet contemplation is your favorite companion. While the rest of the porg world wastes its energy squawking and flapping its wings, you prefer basking in the solitude of your own mind. Which came first: the porg or the egg? You may never know, but that doesn't stop you from thinking about it.";
      break;

    case "not":
      porgDescription = "You're, um...definitely not a porg. You have an odd appetite for flesh and your propensity for flashing your razor-sharp teeth suggest a monstrous side that is just plain disturbing. You might look like a porg on the outside (sort of), but real porgs better beware!";
      break;

    case "prodigious":
      porgDescription = "Everything about you is immense: your brow, feet, wings, wail, and even your persona are perfectly prodigious. Unlike average porgs, you do not pass by unnoticed; in fact, you've recently won several prestigious awards related to your size, including Biggest Bird in the Unknown Regions and Outstanding Avian of the Year. Despite your girth, however, you're truly a gentle giant at heart, and love to spend your time knitting oversized sweaters for your porg friends.";
      break;

    case "polite":
      porgDescription = "You're so well-groomed and polite, most days you act more like a tuxedoed penguin than a porg! (In fact, that might be exactly what you are--but who's keeping track?) Some of your expressions are a bit archaic, but your extremely good manners are endearing and lend you an old-fashioned charm that's rare in these fast-paced times.";
      break;

    case "sad":
      porgDescription = "Woe is you. Finding yourself at the bottom of the food chain, you're plagued day in and day out by thoughts of your vulnerable existence and soon-to-be consumption. Plus, you're just naturally doleful, and a day not spent sighing in a state of dejected resignation is wasted (in your humble opinion).";
      break;

    case "sexy":
      porgDescription = "Somebody call Intergalactic 911, because you are on fire! Your enviable torpedo shape accentuates your flattering features, and nobody can resist porg-whistling in your direction when you walk by. Throw on a set of matching lacy lingerie, and watch the world faint at your feet when you peel it off for their viewing pleasure!";
      break;

    case "sleepy":
      porgDescription = "When you're not sleeping, you can be found lazing, dozing, nodding off, fishing, or passed out. You can make a slumber spot out of anything: your nest, the floor, a chair, a lightsaber box. Even your dreams are filled with snoozing, and the gentle purring of your motorcycle snore is a familiar sound around your domicile.";
      break;

    case "wise":
      porgDescription = "Wow, you are one wise porg. When you imbibe in a glass of wine (or five), your inebriation opens up a window to another dimension. Obi Wan once wrote that yours is among 'the most exalted minds of past, present, or future,' and you certainly have a reputation for spouting aphorisms that other porgs are quick to adopt as their own.";
      break;


    case "worthy":
      porgDescription = "You're a porg of porgly proportions, and everyone who's anyone on Ahch-to island knows your name. Out of respect for your worthiness, Thor regularly lends you his hammer (which you can lift with only your left wing-tip), and Obi Wan once consulted you for lightsaber tips before dueling Darth Vader. When other porgs speak your name, they do so in a whisper of reverence.";
      break;

    default:
      porgDescription = "Hey, you're a Porg! Life must be good, huh?"
  }

  app.post("/porg-refresh", function(req, res) {
      res.redirect("/porg");
    })


  res.render("porg-result", {
    porgMood: porgMood,
    porgType: porgType,
    porgDescription: porgDescription
  });
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

// If pressing a month button
app.post("/calendar", function(req, res) {
  let button = req.body.button;
  let modal = req.body.calendarModal;


// Try to figure this out: if button clicked is the month button, then show modal. If button clicked on is modal accept button, then redirect to calendar result. If button clicked on is close, redirect to calendar home page.
  //
  // button.addEventListener("click", function() {
  //   alert("hi!");
  // })

  console.log(button);
  console.log(modal);

  // console.log(button);

})

// If pressing close button

app.post("calendar-close", function(req, res) {
  res.redirect("/calendar");
})

// If opening the advent calendar month result
app.post("calendar-result", function(req, res) {

  let month = req.body.open;
  let adventDescription = "";

  switch (button) {
    case "january":
      adventDescription = "Here's your " + month + " advent calendar surprise!";
      break;

    default: "Generic surprise! YAY!"

  }

  res.render("calendar-result", {
    adventDescription: adventDescription,
    month: month
  })
})


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port " + (process.env.PORT || 3000));
});
