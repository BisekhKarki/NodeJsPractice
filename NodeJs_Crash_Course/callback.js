// Call back function example 1
// console.log("Task Start")
// function asyncTask(cb){
//     console.log("Task running")
//     setTimeout(cb,0);
// }


// asyncTask(()=> console.log(name))
// console.log("Task End")
// const name = "Bisekh"


// Call back function example 2

// function asyncTask(cb){
//     setTimeout(()=>{
//         cb(null,"This is the data from the server")
//     },0);
// }

// asyncTask((err,data) => {
//     if(err){
//         throw err
//     } else{
//         console.log("Data: ",data)
//     }

// })



function asyncTask(cb){
    setTimeout(()=>{
        cb(null,"This is the data from the server")
    },0);
}

function makeApiCall(cb){
    setTimeout(()=>{
        console.log("This is async task exectuion")
    },0)
}

makeApiCall(()=>{
    makeApiCall(()=>{
        asyncTask(()=>{
            asyncTask(()=>{
                asyncTask(()=>{
                })
            })
        })
    })
})

console.log("This is async task1 exectuion")
console.log("This is async task2 exectuion")
console.log("This is async task3 exectuion")
console.log("This is async task4 exectuion")