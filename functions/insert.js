const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://127.0.0.1:27017";
var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const hicheel = require('../hicheel.json');
const dun2018fall = require('../dun2018fall.json');
const dun2018spr = require('../dun2018spr.json');
const classChoice2018fall = require('../CC2018fall.json');
const classChoice2018spr = require('../CC2018spr.json');

client.connect((err, client) => {
    if (err) {
        console.log(err);
    }
    const db = client.db("UManage");
    const ClassDet = db.collection('ClassDet');
    const Marks2018fall = db.collection("Marks2018fall");
    const Marks2018spr = db.collection("Marks2018spr");
    const CC2018spr = db.collection("classChoice2018spr");
    const CC2018fall = db.collection("ClassChoice2018fall");

    ClassDet.insertMany(hicheel.map(obj => {
        obj.Name = obj.Name.toUpperCase();
        return obj;
    }), (err, res) => console.log(err ? err : res));

    Marks2018fall.insertMany(dun2018fall.map(obj => {
        obj.Хичээлийн_нэр = obj.Хичээлийн_нэр.toUpperCase();
        return obj;
    }), (err, res) => console.log(err ? err : res));

    Marks2018spr.insertMany(dun2018spr.map(obj => {
        obj.Хичээлийн_нэр = obj.Хичээлийн_нэр.toUpperCase();
        return obj;
    }), (err, res) => console.log(err ? err : res))

    CC2018fall.insertMany(classChoice2018fall.map(obj => {
        obj.Хичээлийн_нэр = obj.Хичээлийн_нэр.toUpperCase();
        return obj;
    }), (err, res) => console.log(err ? err : res))

    CC2018spr.insertMany(classChoice2018spr.map(obj => {
        obj.Хичээлийн_нэр = obj.Хичээлийн_нэр.toUpperCase();
        return obj;
    }), (err, res) => console.log(err ? err : res))

})


