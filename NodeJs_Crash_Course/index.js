// const path = require("path")
const filePath = "/Users/Acer/Desktop/NodeJSPractice/NodeJsPractice/NodeJs_Crash_Course/files/sample.txt";

const { error } = require("console");
// // directory name
// console.log(path.dirname(filePath));

// // basename

// console.log(path.basename(path));

// // extension 
// console.log(path.extname(filePath));


const fs = require("fs");
const path = require("path");
// console.log(fs)

// Reading from a file
// fs.readFile(filePath,(error,data)=>{
//     if(error) throw new Error("Something went wrong")
//     console.log(data.toString())
// })


// try{
//     const data = fs.readFileSync(path.join(__dirname,"files", "sample.txt"),"utf-8")
//     console.log(data)
// }catch(error){
//     console.log(error)
// }


const fsPromise = require("fs").promises;
// const fileReading = async()=>{
//     try{
//         const data = await fsPromise.readFile(filePath, {encoding:"utf-8"})
//         console.log("FS PROMISES: ", data)
//     }catch (err){
//         console.log(err)
//     }
// }
// fileReading()

// Writing into a file
const textFile = path.join(__dirname,"files","text.txt",)
const content = "My name is bisekh karki"
// fs.writeFile(textFile,content,(error)=>{
//     if(error) throw new Error("Something went wrong")
//     console.log("Write operation Completed successfully")
    
//     fs.readFile(textFile,"utf-8",(err,data)=>{
//         if (err) throw new Error("Something wrong!!");
//         else console.log("Reading from the file")
//         console.log(data)
//     })
// })


// Writing into files synchronously
// const writingInFile = async ()=>{
//     try{
//         await fsPromise.writeFile(textFile,content,);
//     await fsPromise.appendFile(textFile,"\nI am 20 years old")
//     const data = await fsPromise.readFile(textFile)
//     console.log(data.toString())
//     }catch(err){
//         console.log(err)
//     }
// }

// writingInFile()


const writingInFile = async ()=>{
    try{
        await fsPromise.writeFile(textFile,content,);
    await fsPromise.appendFile(textFile,"\nI am 20 years old")
    const data = await fsPromise.readFile(textFile)
    await fsPromise.rename(textFile,path.join(__dirname,"files","newText.txt"))
    console.log(data.toString())
    }catch(err){
        console.log(err)
    }
}

writingInFile()