let express = require("express");
let bodyParser = require("body-parser");
let routes = require("./routes/routes.js");
let app = express();
let path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

routes(app);

let server = app.listen(8080, () => {
    console.log("server started on port:", server.address().port);
});