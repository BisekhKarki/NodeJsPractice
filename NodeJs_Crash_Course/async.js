// Synchronous example
// console.log("Start operation")

// function sleep(milisecond){
//     let startTime = new Date().getTime()
//     console.log("Operation is running")
//     while(new Date().getTime() < startTime + milisecond){
//         console.log("In progress")
//     }
//     console.log("Operation is done!")
// }

// sleep(1000);

// console.log("do something else")




// Asynchronous example
console.log("Start operation")
function sleep(milisecond){
    console.log("Operation is running")
   setTimeout(()=>{
    console.log("Operation is done!")
   },milisecond)
    
}
sleep(1000);
console.log("do something else")