const functions = require('firebase-functions');
let express = require("express");
let bodyParser = require("body-parser");
let routes = require("./routes/routes.js");
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

routes(app);

exports.app = functions.https.onRequest(app);