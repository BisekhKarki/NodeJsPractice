const repl = require("repl");
const local = repl.start("Node console started")
local.on("exit",()=>{
    console.log("exiting REPL")
    process.exit()
})