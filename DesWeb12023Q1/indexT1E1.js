var http = require('http');
var url = require('url');

http.createServer( function(req, res){
    
    var q = url.parse(req.url, true);
    var datos = q.query; 

    res.writeHead(200, {'Content-Type': 'text/html'});
    let result = (datos.nom);
    res.write(" Bienvenido " + datos.nom +" acaba de crear su primer sistema de informacion ");
    res.write('<br>');
    res.end();

}).listen(8080);