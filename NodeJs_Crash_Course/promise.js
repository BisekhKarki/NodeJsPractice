// const promise = new Promise((resolve,reject)=>{
//     console.log("Async task execution");
//     if(false){
//         const person = {name:"Bisekh"}
//         resolve(person)
//     } else{
//         const error = {error:"1001"} 
//         reject(error)
//     }
// });

// promise.then(
//     (val)=>{
//         console.log(val)
//     }
//     // ,
//     // (error)=>{
//     // console.log(error)
//     // }
// ).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Clean up")
// })


// When already resolved
// let res = Promise.resolve("Execution is done")
// // let rej = Promise.reject("Execution is rejected")

// res.then((val)=>{
//     console.log(val)
// })


// function asyncTask(){
//     return Promise.resolve()
// }

// asyncTask().then(()=> console.log(name))
// const name = "Bisekh"


// Chaining in promises
// const p = Promise.resolve("Done")
// // const p = Promise.reject("Failed")

// p.then((val)=>{
//     console.log(val)
//     return "Done 2"
// }).then((val)=>{
//     console.log(val)
//     return "Done 3"
// }).then((val)=>{
//     console.log(val)
// }).catch((val)=>{
//     console.log(val)
// })


const makeApiCall= (time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This API is executed in: " + time)
        },time)
    })
}

// makeApiCall(1000).then((val)=> console.log(val))

let multiApiCall = [makeApiCall(1000), makeApiCall(2000),makeApiCall(500)]
Promise.all(multiApiCall).then((val)=>{
    console.log(val)
})

Promise.race(multiApiCall).then((val)=>{
    console.log(val)
})