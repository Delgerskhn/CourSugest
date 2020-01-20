const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://deved11:deved11@inkdrop01-krs6g.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const classChoice = require('./routes/classChoice.json')

const db = {};
db.findByTitle = (title, callback) => {
  client.connect(err => {
    if (err) {
      console.log(err);
      callback("Database error", err)
    }
    const collection = client.db("UManage").collection("Classes");
    collection.find({ Name: new RegExp(title) }).toArray((err, docs) => {
      if (err) {
        console.log(err);
        callback("Database error", err)
      }
      console.log(docs);
      callback(docs);
      client.close();
    })
  }).catch(e => callback("Өгөгдлийн сантай холбогдох үед алдаа гарлаа\n", e));
}

db.classinfo = (id, name, callback) => {
  client.connect(err => {
    if (err) {
      console.log(err);
      callback("Өгөгдлийн сантай холбогдох үед алдаа гарлаа", err)
    }
    const db = client.db("UManage");
    const ClassDet = db.collection("ClassDet");
    const Marks2018fall = db.collection("Marks2018fall");
    const Marks2018spr = db.collection("Marks2018spr");
    const CC2018spr = db.collection("classChoice2018spr");
    const CC2018fall = db.collection("ClassChoice2018fall");

    const cd = new Promise((res, rej) => {
      ClassDet.findOne({ Name: name, ID: id })
        .then((docs) => {
          if (err) {
            callback("Өгөгдлийн сантай холбогдох үед алдаа гарлаа", err)
            console.log(err);
          }
          console.log(docs);
          res(docs);
          client.close();
        });
    }).catch(e => console.log(e));

    const mf = new Promise((res, rej) => {
      Marks2018fall.find({ Хичээлийн_нэр: name })
        .project({ Үсгэн_дүн: true, Үсгэн_дүн_тоо: true, _id: false })
        .toArray((err, docs) => {
          if (err) {
            callback("Өгөгдлийн сантай холбогдох үед алдаа гарлаа", err)
            console.log(err);
          }
          console.log(docs);
          res(docs);
          client.close();
        })
    }).catch(e => console.log("Marks2018fall error\n", e));

    const ms = new Promise((res, rej) => {
      Marks2018spr.find({ Хичээлийн_нэр: name })
        .project({ Үсгэн_дүн: true, Үсгэн_дүн_тоо: true, _id: false })
        .toArray((err, docs) => {
          if (err) {
            callback("Өгөгдлийн сантай холбогдох үед алдаа гарлаа", err)
            console.log(err);
          }
          console.log(docs);
          res(docs);
          client.close();
        })
    }).catch(e => console.log("Marks2018spr error\n", e));

    const ccs = new Promise((res, rej) => {
      CC2018spr.find({ Хичээлийн_нэр: name }).project({
        Багшийн_нэр: true,
        Багшид_өгсөн_санал: true,
        Санал_өгсөн_суралцагчийн_тоо: true,
        _id: false
      }).toArray((err, docs) => {
        if (err) {
          callback("Өгөгдлийн сантай холбогдох үед алдаа гарлаа", err)
          console.log(err);
        }
        console.log(docs);
        res(docs);
        client.close();
      })
    }).catch(e => console.log("CC2018spr error\n", e));

    const ccf = new Promise((res, rej) => {
      CC2018fall.find({ Хичээлийн_нэр: name }).project({
        Багшийн_нэр: true,
        Багшид_өгсөн_санал: true,
        Санал_өгсөн_суралцагчийн_тоо: true,
        _id: false
      }).toArray((err, docs) => {
        if (err) {
          callback("Өгөгдлийн сантай холбогдох үед алдаа гарлаа", err)
          console.log(err);
        }
        console.log(docs);
        res(docs);
        client.close();
      })
    }).catch(e => console.log("CC2018fall error\n", e));

    Promise.all([cd, mf, ms, ccs, ccf]).then(function (values) {
      let sendObject = {};
      sendObject.info = values[0];
      sendObject.marksfall = values[1];
      sendObject.marksspr = values[2];
      sendObject.teachersspr = values[3];
      sendObject.teachersfall = values[4];
      callback(sendObject);
    }).catch(e => console.log("All promise execution error\n", e))

  });
}



module.exports = db;