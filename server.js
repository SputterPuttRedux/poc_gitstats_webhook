const util = require("util");
const storage = require("node-persist");

// server.js
// init project
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/app/index.html");
});

app.post("/", function(request, response) {
  response.send("YOU JUST POSTED!!" + util.inspect(request.body));

  async request => {
    await storage.init({ logging: true });

    await storage.setItem("request", request);

    let postRequest = await storage.getItem("request");
    console.log(postRequest.params);
  };
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
