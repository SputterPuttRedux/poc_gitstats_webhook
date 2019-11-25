const util = require("util");
const fs = require("file-system");

// server.js
// init project
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var expressWinston = require('express-winston');

// var stream = fs.createWriteStream("public/request_dump.json", { flags: "a" });

const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: './public/request_dump.json' })
  ]
});


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
  let request_body = util.inspect(request.body);
  response.send("YOU JUST POSTED!!  " + request_body);
  // stream.write(JSON.stringify(request.body));
  logger.info(request.body);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
