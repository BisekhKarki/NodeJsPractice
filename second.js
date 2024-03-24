// Reading and Writing in a file synchronously

const fs = require('fs') // importing the module fs to read and write file synchronously
const filePath = '/home/bisekh/Desktop/NodeJS/Files/input.txt' // Path of the file
let outputPath = '/home/bisekh/Desktop/NodeJS/Files/output.txt'
let textIn = fs.readFileSync(filePath,'utf-8') // Read the content from the file
console.log(textIn)

let valueInsert = `${textIn}, I am learning NodeJs currently. \n ${new Date()}`
fs.writeFileSync(outputPath,valueInsert)