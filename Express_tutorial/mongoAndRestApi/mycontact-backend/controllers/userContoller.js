const asyncHandler = require("express-async-handler");
const user = require('../models/userModel')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// @description Register a user
// @route Post /api/users/register
// @access public

const registerUser = asyncHandler (async (req,res)=>{
    const { username, email, password } = req.body
    if(!username || !email || !password ){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const userAvailable = await user.findOne({email});
    if(userAvailable){
        res.status(400)
        throw new Error("User already registered")
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const User = await user.create({
        username,
        email,
        password: hashedPassword,
    })
    console.log(User)
    if(User){
        res.status(200).json({_id: User.id, email:User.email})
    }else{
        res.status(400)
        throw new Error("Invalid user")
    }

    res.json({message: "Register the user"})


})

// @description Login a user
// @route Post /api/users/login
// @access public



const loginUser = asyncHandler (async (req,res)=>{
    const { email, password } = req.body
    if(!email || !password){
        res.status(400);
       throw new Error("All fields required")
    }
    const User = await user.findOne({ email })

    // compare password
    if(User && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: User.username,
                email: User.email,
                id: User.id
            },
        }, process.env.ACCESS_TOKEN_SECRET, 
        { expiresIn: "5m" }
    )
        res.status(200).json({ accessToken  })
    }else {
        res.status(401);
        throw new Error("Email or Password not valid")
    }

    res.json({message: "Login user"})

})


// @description Current user information
// @route Get /api/users/current
// @access praviate

const currentUser = asyncHandler (async (req,res)=>{

    res.json(req.user)

})

module.exports = { registerUser, loginUser, currentUser}
