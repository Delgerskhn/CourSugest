const http = require('http');
const fs = require('fs');

http.createServer(function (request, respond) {
    hicheel = 'Биеийн тамир ерөнхий суурь';

    axios.get('data.num/asfdsadfasdflak')
    respond.write()
}).listen(5000, function () { console.log('listening on 5000') })





// http.createServer((req, res) => {

//     fs.readFile(__dirname + '/client/src/views/index.html', (err, data) => {
//         if (err) console.log(err);
//         res.write(data);
//         res.end();
//     })
// }).listen(8008, () => console.log('listening on localhost 8008'));

// fs.writeFile('test.txt', 'this is first text', (err) => {
//     if (err) console.log(err);
//     console.log("Replaced");
// })

// fs.appendFile('test.txt', 'this is second text', (err) => {
//     if (err) console.log(err);
//     console.log("Replaced");
// })


//object ugugdsun bol object dotorh string aguulsan entry g hevle
//object ugugdsun bol object dotorh int aguulsan entry g hevle
//object array aas string value aguulsan object uudiig high order method oor ol
