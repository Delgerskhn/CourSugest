const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");
const router = require("./routes/routes.js");
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');

app.set('views', path.join(__dirname, '../client/src/views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use("*", cors());
app.use(expressLayouts);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/src')));
app.use(router);


app.listen(8080, () => console.log('listening on 8080'))