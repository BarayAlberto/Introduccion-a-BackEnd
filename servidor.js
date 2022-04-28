var http = requiere('http');
var fs = requiere('fs');
var path = requiere('path');

http.createServer(function(request, respone){
    console.log('request', request.url);

    var filePath = '.' + request.url;
    if(filePath == './'){
        filePath = "./index.html";
    }
});