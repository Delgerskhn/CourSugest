var http = require('http');
var fs = require('fs');
var Path = require('Path')
http.createServer(function(req,res) {

    if(req.url === "/"){
    fs.readFile(__dirname+'/client/src/views/index.html', function(err, data){
     res.writeHead(200, {'Content-Type':'Text/html' });
     res.write(data);
     res.end();
    });
}
   else if(req.url.match("\.css")){
       var cssPath
   }
}).listen(5000,function(){console.log('server running on port 5000')});