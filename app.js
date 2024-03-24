const readLine = require('readline');
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})


rl.question("Please enter your name: ",(name)=>{
    console.log("You entered: ",name);
    rl.close();
})


rl.on('close',()=>{
    console.log("Finished");
    process.exit(0);
})

