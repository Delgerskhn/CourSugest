const db = require('../db');

let appRouter = function (app) {
  app.get('/', (req, res) => {
    res.render('index');
  })
  app.post('/api/findByTitle', (req, res) => {
    const { title } = req.body;
    db.findByTitle(title.toUpperCase(), (val, err) => {
      if (err);
      res.send(val);
    })
  })
  app.post("/api/classinfo", (req, res) => {
    const { id, name } = req.body;
    db.classinfo(id, name.toUpperCase(), (val, err) => {
      if (err);
      res.send(val);
    })
  });
}

module.exports = appRouter;
