const router = require("express").Router();
const fetch = require('node-fetch');
const bagsh = require('../data/bagsh.json');
const dun = require('../data/dun.json');
const hicheel = require('../data/hicheel.json');

router.get("/", function (req, res) {
    res.render('index');
});

router.get('/class', (req, res) => {
    res.render('class');
})

router.get('/api/getClasses', (req, res) => {
    res.send(hicheel.map(obj => { return { id: obj.Хичээлийн_дугаар, name: obj.Монгол_нэр } }))
})

router.get('/api/getClass/:id', (req, res) => {
    const { id } = req.params;
    let sum = {};
    sum.class = hicheel.find(obj => obj.Хичээлийн_дугаар === id);
    // class.then((val) => res.send(val))
    sum.marks = dun.filter(obj => obj.Хичээлийн_нэр === sum.class.Монгол_нэр);

    let filter = bagsh.filter(
        data => data.Хичээлийн_нэр === sum.class.Монгол_нэр
    );
    if (filter.length) {
        let avg = filter[0].Санал_өгсөн_суралцагчийн_тоо / filter.length;
        filter.forEach(element => {
            element.index = element.Багшид_өгсөн_санал / avg;
        });
        filter.sort((a, b) => {
            return a.index < b.index ? 1 : -1;
        });
        sum.teachers = filter;
    }

    res.send(sum);
})

module.exports = router;