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
    console.log(classId);
    let arr = new Array();
    fs.readFile(__dirname + "/hicheel.json", (err, data) => {
      if (err) throw err;
      arr = filterClass(data, classId);
      res.send(arr);
      // classId = arr[0].Name;
      // fs.readFile(__dirname + "/teacher.json", (err, data) => {
      //   if (err) throw err;
      //   arr.push(filterTeacher(data, classId));
      //   res.send(arr);
      // });
    });
  });
  app.get("/test", (req, res) => {
    fs.readFile(__dirname + "/hicheel.json", (err, data) => {
      res.send(Filtering(data));
    });
  });
};
let Filtering = Adata => {
  Adata = JSON.parse(Adata);
  return Adata.map(function(x) {
    return {
      ID: x.Хичээлийн_индекс,
      Name: x.Монгол_нэр,
      Бүтэц: x.Харьяалах_бүтэц,
      Тэнхим: x.Харьяалах_тэнхим,
      Түвшин: x.Сургалтын_түвшин,
      Season: x.Орох_улирал,
      Багц: x.Багц_цаг
    };
  });
};

let filterClass = (data, classId) => {
  data = JSON.parse(data);
  return data.filter(x => x.ID === classId);
};

let filterTeacher = (data, clasId) => {
  data = JSON.parse(data);
  data = data.filter(item => item.Хичээлийн_нэр === clasId);
  let sum = data[0].Санал_өгсөн_суралцагчийн_тоо;
  return data.map(function(x) {
    return {
      Name: x.Багшийн_нэр,
      Index: x.Багшид_өгсөн_санал / sum
    };
  });
};

module.exports = appRouter;
