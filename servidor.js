var http = requiere('http');
var fs = requiere('fs');
var path = requiere('path');

http.createServer(function(request, respone){
    console.log('request', request.url);

    var filePath = '.' + request.url;
    if(filePath == './'){
        filePath = "./index.html";
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var contentType = 'text/html';
    var mimeTypes = {
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png'
    }

    fs.readFile(filePath, function(error, content){
        if(error){
            if(error.code = 'ENOENT'){
                fs.readFile('./404.html', function(error, content){
                    response.write.writeHead(200, {'Content-Type': contentType});
                    response.end(content, 'utf-8');
                });
            }else{
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: ' + error.responseEnd());
            }
        }else{
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content, 'utf-8');
        }
    });

}).listen(3000);
console.log('Server running at http://127.16.0.39:3000/'); 