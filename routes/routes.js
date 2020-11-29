const db = require('../db');

let appRouter = function (app) {
  app.get('/', (req, res) => {
    res.render('index');
  })
  app.post('/api/findByTitle', (req, res) => {
    const { title } = req.body;
    db.findByTitle(title.toUpperCase(), (val, err) => {
      if (err) {
        res.set('status', 500);
        res.send(val);
      }
      res.send(val);
      res.end();
    })
  })
  app.post("/api/classinfo", (req, res) => {
    const { id, name } = req.body;
    db.classinfo(id, name.toUpperCase(), (val, err) => {
      if (err) {
        res.set('status', 500);
        res.send(val);
      }
      res.send(val);
    })
  });
}

module.exports = appRouter;
