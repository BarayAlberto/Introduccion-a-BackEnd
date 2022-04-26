//Hola mundo en texto plano usando HTML

//Llamamos el modulo http
const http = require('http');
//establecemos la url o ip de nuestro servidor
const hostname = '172.16.1.33';
//establecemos el puerto de escucha
const port = 3000;
//creamos una instancia http con un reques y response
const server = http.createServer((req, res) => {
    //El codigo respondera un codigo 200
    res.statusCode = 200;
    //El servidor respondera con un tenxto plano 
    res.setHeader('Content-Type', 'text/plain');
    //El mensaje respondera con el mensaje de hola munod
    res.end('Hola Mundo\n');
});

server.listen(port, hostname, () => {
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);
});

