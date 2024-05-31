const fs = require('fs');
const https = require('http')
const html = fs.readFileSync('./templates/index.html','utf-8');

const server = https.createServer((request,response)=>{
    response.end(html);
    console.log('A new server received');
})


server.listen('8000','127.0.0.1',()=>{
    console.log("Server has started");
})  