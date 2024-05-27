// console.log(process.argv.slice(2)[0]);
// process.argv.forEach((val,index)=>{
//     console.log(`${index}: ${val}`)
// })

const minimist = require("minimist")
const argvNew = minimist(process.argv.slice(2))
console.log(argvNew.name)