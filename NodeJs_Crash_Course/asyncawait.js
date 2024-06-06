// const useLogin = ()=>{
//     console.log("Enter Username and Password");
//     let username = prompt("Enter username: ")
//     let Password = prompt("Enter password: ");

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Performing user Authentication");
//             if(username === "bisekh" & Password === "123"){
//                 resolve("User Authenticated")
//             }else {
//                 reject("Authentication failed!")
//             }
//         },1000)
//     })

// }

// function goToHomePage(UserAuthStatus){
//     return Promise.resolve(`Go to Homepage as : ${UserAuthStatus}`)
// }

// useLogin().then((response)=>{
//     console.log("Validated user")
//     return goToHomePage(response)
// }).then((UserAuthStatus)=>{
//     console.log(UserAuthStatus)
// }).catch((error)=>{
//     console.log(error)
// })


// async function performTask(){
//     try{
//         const response = await useLogin();
//         console.log("Validated user")
//         const UserAuthStatus = await goToHomePage(response)
//         console.log(UserAuthStatus)
    
//     }catch(error){
//         console.log(error)
//     }
    
// }

// performTask()


const makeApiCall= (time)=>{
    return () => new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This API is executed in: " + time)
        },time)
    })
}

const apiRequests = [makeApiCall(1000), makeApiCall(2000),makeApiCall(500)]

(async function () {
    for(let request of apiRequests){
        console.log(await request());
    }
}) ()