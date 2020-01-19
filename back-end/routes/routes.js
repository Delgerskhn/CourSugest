let fs = require("fs");

let appRouter = function(app) {
  app.get("/", (req, res) => {
    res.render("index.html");
  });
  app.get("/api/getClasses", (req, res) => {
    fs.readFile(__dirname + "/classes.json", (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  });
  app.get("/classinfo/:id", (req, res) => {
    let classId = req.params.id;
    fs.readFile(__dirname + "/hicheel.json", (err, data) => {
      if (err) throw err;
      res.send(filterClass(data, classId));
    });
  });
};

let filterClass = (data, clasId) => {
  data = JSON.parse(data);
  return data.filter(x => x.ID === clasId);
};

module.exports = appRouter;
