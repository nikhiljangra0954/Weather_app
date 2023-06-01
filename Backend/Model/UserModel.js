// here we will create a model schema for the user

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:String,
    password:String,
},{
    versionKey : false
})

const userModel = mongoose.model("user", userSchema)

// now export the model 
module.exports ={
    userModel
}