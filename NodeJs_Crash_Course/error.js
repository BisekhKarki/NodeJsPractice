const error = new Error("Something went wrong!");
// console.log(error.stack);
// console.log(error.message);
// throw new Error("There is something bothering!!!!!")



const { CustomError } = require("./CustomError");
// throw new CustomError("This is custom error message") 

// try{
// doSomething()
// }catch(e){
// console.log("Error occured")
// // console.log(e)
// }

function doSomething(){
    const data = fetch("localhost:3000/api")
    // console.log("Hello!! there")
    // return "hello"
}

// Uncaught exception
// process.on("Uncaught Exception", (err)=>{
//     console.log("There was some error", err)
//     process.exit(1)
// })

// doSomething()


// exception with promises
// const promise = new Promise((resolve,reject)=>{
//     if(true){
//         resolve(doSomething())
//     }else{
//         reject(doSomething())
//     }
    
// })

// promise.then(val=>{
//     console.log(val)
// }).catch((err)=>{
//     console.log("Error occured\n",err)
// })



// Using async and await
const someFunction =async ()=>{
    try{
        await doSomething()
    }catch(err){
        console.log(err)
        throw new CustomError(err.message)
    }
}

someFunction()
