var http = require('http');
var url = require('url');

http.createServer( function(req, res){
    
    var q = url.parse(req.url, true);
    var datos = q.query; 

    res.writeHead(200, {'Content-Type': 'text/html'});
    let result;
    let result1;
    
    result = parseFloat(datos.num1) * parseFloat(datos.num2);
    result1 = parseFloat(datos.num1) / parseFloat(datos.num2);

    res.write("La Multiplicacion de " + datos.num1 +" * " + datos.num2 + " es = " + result);
    res.write('<br>');
    res.write("La Division de " + datos.num1 +" /" + datos.num2 + " es = " + result1);
    res.write('<br>');


    res.end();

}).listen(8000);