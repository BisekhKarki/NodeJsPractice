let fileRead = require('fs') // importing the module fs
const filePath = '/home/bisekh/Desktop/NodeJS/Files/input.txt' // Path of the file
let outputPath = '/home/bisekh/Desktop/NodeJS/Files/outputSecond.txt' 
fileRead.readFile(filePath,'utf-8',(error,data)=>{ //Reading the file and return a callback function 
    // Callback function here have two arguments one is error and another is data  
    // data stores all the information that is read from the file
    console.log(data);
    console.log("Writing on file....")
    fileRead.writeFile(outputPath,'Hello, my name is Bisekh Karki, this is my second day of learning NodeJS',()=>{
        console.log("Successfully wrote in the file")
    });
})
console.log("Reading file....")