const https = require('http');
const server = https.createServer((request,response)=>{
    let path = request.url;
    // response.end(path);
    if(path === "/" || path.toLocaleLowerCase()==='/home'){
        response.end("You are in home page");
    } else if(path.toLocaleLowerCase()==='/about'){
        response.end("You are in about page");
    }else if(path.toLocaleLowerCase()==='/contact'){
        response.end("You are in contact page");
    }else{
        response.end("Error: 404 Page not found");
    }
})


server.listen('8000','127.0.0.1',()=>{
    console.log("Sever has started");
})