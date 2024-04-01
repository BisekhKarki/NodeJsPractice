const https = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');
let products = JSON.parse(fs.readFileSync("./Data/Products.json"))
let productListHtml = fs.readFileSync("./templates/product-list.html","utf-8")

let productHtmlArray = products.map((prod)=>{
    let output = productListHtml.replace('{{%IMAGE%}}',prod.productImage)
    output = output.replace('{{%NAME%}}',prod.name)
    output = output.replace('{{%MODELNAME%}}',prod.modeName)
    output = output.replace('{{%MODELNO%}}',prod.modelNumber)
    output = output.replace('{{%SIZE%}}',prod.size)
    output = output.replace('{{%CAMERA%}}',prod.camera)
    output = output.replace('{{%PRICE%}}',prod.price)
    output = output.replace('{{%COLOR%}}',prod.color)
    return output
})

const html = fs.readFileSync("./templates/index.html",'utf-8')
const server = https.createServer((request,response)=>{
    let path = request.url;
    // response.end(path);
    if(path === "/" || path.toLocaleLowerCase()==='/home'){
        response.writeHead(200,{
            'Content-type': 'text/html',
            'my-header': 'Hello world'
        });
        response.end(html.replace('{{%%CONTENT}}',productListHtml));
    } else if(path.toLocaleLowerCase()==='/about'){
        response.writeHead(200,{
            'Content-type': 'text/html',
            'my-header': 'Hello world'
        });
        response.end(html.replace('{{%%CONTENT}}','You are in about us page'));
    }else if(path.toLocaleLowerCase()==='/contact'){
        response.writeHead(200,{
            'Content-type': 'text/html',
            'my-header': 'Hello world'
        });
        response.end(html.replace('{{%%CONTENT}}','You are in contact page'));
    } else if (path.toLocaleLowerCase()==="/product"){
        let productResponse = html.replace("{{%%CONTENT%%}",productHtmlArray.join(","))
        response.writeHead(200,{'Content-type': 'text/html'});
        response.end(productResponse);
    //    console.log(products)
    // console.log(productHtmlArray.join(','))

    }else{
        response.writeHead(404,{
            'Content-type': 'text/html',
            'my-header': 'Hello world'
        });
        response.end(html.replace('{{%%CONTENT}}','Error:404 Page not found'));
    }
    
})

server.listen('8000','127.0.0.1',()=>{
    console.log("Sever has started");
})