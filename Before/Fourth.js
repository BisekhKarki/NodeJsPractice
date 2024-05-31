const http = require('http');
const server = http.createServer((request,response)=>{
    response.end('<h1>My name is Bisekh</h1>');
    console.log("A new request received");
    // console.log(request);

})
server.listen('8000','127.0.0.1',()=>{
    console.log("Server Started....")
})

