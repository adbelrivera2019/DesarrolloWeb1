var http = require('http');
var url = require('url');

http.createServer( function(req, res){
    
    var q = url.parse(req.url, true);
    var datos = q.query; 

    res.writeHead(200, {'Content-Type': 'text/html'});
    let result;
    let result1 ;
   //= parseFloat(datos.num1)
    result = parseFloat(datos.num1) * parseFloat(2);
    result1 = parseFloat(datos.num1) * parseFloat(3);

    res.write("El doble de " + datos.num1 + " es = " + result);
    res.write('<br>');
    res.write("El triple de " + datos.num1 + " es = " + result1);
    res.write('<br>');


    res.end();

}).listen(3000);