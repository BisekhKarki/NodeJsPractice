const express = require('express')
const app = express();

const port = 3001;

app.get("/",(req,res)=>{
    res.json({message:"Hello world"})
})

app.get("/users",(req,res)=>{
    res.json({message:"Get all the users"})
})

app.get("/users/:id",(req,res)=>{
    res.json({message:`Get the users ID: ${req.params.id}`})
})

app.post("/users/",(req,res)=>{
    res.json({message:`Create new users`})
})

app.put("/users/:id",(req,res)=>{
    res.json({message:`Update the users ID: ${req.params.id}`})
})

app.delete("/users/:id",(req,res)=>{
    res.json({message:`Delete the users ID: ${req.params.id}`})
})

app.listen(port, ()=>{
    console.log("Example app listening on port: ",port)
})
