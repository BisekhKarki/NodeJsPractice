const asyncHandler = require("express-async-handler");
const contact = require("../models/contactModel");

// @description for get all contacts 
// @route GEt /api/contacts
// @access private

const getContact = asyncHandler (async (req,res)=>{
    console.log(req.url)
    const contacts = await contact.find({ user_id: req.user.id})
    res.status(200).json(contacts)
})


// @description for Create new contacts 
// @route POST /api/contacts
// @access private

const createContact = asyncHandler( async (req,res)=>{
    console.log(req.url)
    console.log("The request body is: ",req.body);
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are mandatory");
    }

    const contacts = await contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    })
    res.status(201).json(contacts)
})


// @description for Get contacts from id
// @route GET /api/contacts:id
// @access private

const getContacts = asyncHandler( async (req,res)=>{
    console.log(req.url)
    const contacts = await contact.findById(req.params.id)
    if(!contacts){
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(contacts)
})

// @description for Update contacts 
// @route PUT /api/contacts:id
// @access public

const updateContact = asyncHandler(  
   async (req,res)=>{
        console.log(req.url)
        const contacts = await contact.findById(req.params.id)
        if(!contacts){
            res.status(404);
            throw new Error("Contact not found")
        }
        if(contacts.user_id.toString() !== req.user.id){
            res.status(403);
            throw new Error("User don't have permission to update other users")
        }
        const updatedContact = await contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.status(200).json(updatedContact)
    }
) 


// @description for Delete contacts 
// @route Delete /api/contacts:id
// @access public

const deleteContact = asyncHandler( async (req,res)=>{
    console.log(req.url)
    const contacts = await contact.findById(req.params.id)
    if(!contacts){
        res.status(404);
        throw new Error("Contact not found")
    }

    if(contacts.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have permission to delete other users")
    }
    const removeContact = await contact.deleteOne({_id: req.params.id });
    res.status(200).json(removeContact)
})


module.exports = { getContact, createContact, getContacts, updateContact, deleteContact }