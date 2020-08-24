//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require("https");

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

      case "curious":
        porgDescription = "Wow, what a curious little porg you are! From the largest mountaintops to the tiniest pebbles, there's nothing you won't dig up in your quest to discover a greater truth (or maybe just something interesting). When you think someone knows something that you don't, you tend to coo repeatedly until you get an answer! Just be careful not to stick your porg nose somewhere it doesn't belong.";
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

app.post("/weather", function(req, res) {
  const api = "56c13f75f777b9e0a170e8b87fccf8a0";
  const city = req.body.city;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=56c13f75f777b9e0a170e8b87fccf8a0&units=metric";


  https.get(url, function(response) {
    response.on("data", function(data) {

      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp + "°C"
      const description = weatherData.weather[0].description;
      const iconData = weatherData.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + iconData + "@4x.png";
      const humidity = weatherData.main.humidity;
      const pressure = weatherData.main.pressure;

      console.log(city);

      res.render("weather-result", {
        city: city,
        description: description,
        humidity: humidity,
        imageURL: imageURL,
        pressure: pressure,
        temp: temp
      });
    })
  });
})

app.get("/adventure", function(req, res) {
  res.render("adventure");
})

app.get("/calendar", function(req, res) {
  res.render("calendar");
})

// If pressing a month button
app.post("/calendar", function(req, res) {

  const month = req.body.month;
  let adventTitle = "";
  let adventDescription = "";

  switch (month) {
    case "january":
      adventTitle = "Let's go to the zoo!";
      adventDescription = "The start of a new year is a great time to say hello to the animals! From giraffes to jaguars and parrots to penguins, zoos offer a great place for 2021 to take flight. And who knows? Maybe there'll even be a surprise porg sighting along the way!";
      break;

      case "february":
        adventTitle = "Let's go tandem biking!";
        adventDescription = "Gross matching couple shirts are optional for this two-as-one bike ride! While there's no guarantee that both of us will pull our weight evenly or avoid toppling over in a moment of disunity, the novelty is sure to offer us the ride of a lifetime.";
        break;

      case "march":
        adventTitle = "Let's visit Mount Wilson!";
        adventDescription = "It's not every day a professional astrophysicist takes a loony layperson to visit this world-famous observatory, but this month is the month! We'll explore the grounds, go for a hike, lay out a picnic, and simply enjoy the sights from on high. Maybe the aforementioned astrophysicist will even share some of his coveted knowledge during a telescope visit!";
        break;

      case "april":
        adventTitle = "Let's get our A games on at a game cafe!";
        adventDescription = "Whether it's an arcade bar like Button Mash, a board game joint like Game Haus, or just your good ol' internet cafe, it's time to channel our inner nerds! We'll spend our day mashing the A button and cursing loudly at the screen in public--and let's face it, there's no better bonding activity than that. So what are you waiting for? Grab your gaming gloves and let's get going!";
        break;

      case "may":
        adventTitle = "Let's listen to some tunes at a jazz bar!";
        adventDescription = "It's time to get groovy with some seriously jazzy tunes! This month, we'll find a jazz bar with enough saxophone sass and foot-tappin' beats to leave us humming the whole night long. Extra points for every tune or musical riff you can name!";
        break;

      case "june":
        adventTitle = "Let's relax with a spa day!";
        adventDescription = "We're going to Wi! (Or someplace like it.) Get ready to don your best sheep-shaped head towels because we're turning up the heat on a day filled with saunas, steam rooms, and tons of relaxation. Maybe we'll even feel fancy enough to order food or a special spa treatment package? The spa sky is the limit!";
        break;

      case "july":
        adventTitle = "Let's go kayaking!";
        adventDescription = "The pandemic might have gotten the better of us last year, but the sun is shining (hopefully) and it's a great month for a kayak trip! Gliding out on the smooth waters of Marina Del Ray or somewhere even more adventurous is definitely something you should make time to do together this month.";
        break;

      case "august":
        adventTitle = "Let's open a surprise together!";
        adventDescription = "Being apart is an excellent excuse to try something new this year! Pick out a surprise that you think the other person will love (yes, Amazon is fine--$20 limit) and ship it to them. Once both packages arrive, sit down for a fun-filled virtual unwrapping session!";
        break;

      case "september":
        adventTitle = "Let's watch a movie at a drive-in theater!";
        adventDescription = "While it's a true tragedy that we won't get to watch free movies at AMC anytime soon, the alternative will leave you honking for more! We'll pick a flick to see on the big screen from the comfort of our cars--plus, no sticky aisles or popcorn-strewn seats to worry about. It's the cool new (pandemic-enforced) retro thing to do!";
        break;

      case "october":
        adventTitle = "Let's go apple picking!";
        adventDescription = "Fuji, Gala, Red Delicious, and Granny Smith...The time is ripe to try our hands at apple picking! Once we scout out a local orchard, we'll spend our day strolling the tree-lined rows and lounging in the dappled shade. Or, more likely, we'll feel totally sweaty from heaving around buckling barrels of apples because we got too darn greedy.";
        break;

      case "november":
        adventTitle = "Let's write holiday letters!";
        adventDescription = "'Tis the season for good old-fashioned holiday gratitude! The epistolary novel has been a popular form since its advent in the 15th century and Christmas cards have been in vogue since the days of Charles Dickens, so obviously we're doing a bit of both. Handwrite your holiday letter and snail mail it sometime this month!";
        break;

      case "december":
        adventTitle = "Let's have a virtual gaming day!";
        adventDescription = "Boot up Steam and shake out your gaming hand, because the games are about to begin! This month, it's me vs. you (or us vs. the world?) in our inaugural two-person day-long gaming session. Whether it's Civ or something new, you best be ready!";
        break;

    default:
      "Generic surprise! YAY!"
  }

  res.render("calendar-result", {
    adventTitle: adventTitle,
    adventDescription: adventDescription,
    month: month
  })
})

app.post("/calendar-result", function(req, res) {
  res.redirect("calendar");
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port " + (process.env.PORT || 3000));
});
