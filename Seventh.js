const https = require('http');
const fs = require('fs')

const html = fs.readFileSync("./templates/index.html",'utf-8')
const server = https.createServer((request,response)=>{
    let path = request.url;
    // response.end(path);
    if(path === "/" || path.toLocaleLowerCase()==='/home'){
        response.end(html.replace('{{%%CONTENT}}','You are in home page'));
    } else if(path.toLocaleLowerCase()==='/about'){
        response.end(html.replace('{{%%CONTENT}}','You are in about us page'));
    }else if(path.toLocaleLowerCase()==='/contact'){
        response.end(html.replace('{{%%CONTENT}}','You are in contact page'));
    }else{
        response.end(html.replace('{{%%CONTENT}}','Error:404 Page not found'));
    }
    
})

server.listen('8000','127.0.0.1',()=>{
    console.log("Sever has started");
})