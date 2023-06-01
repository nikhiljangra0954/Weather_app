// here we will create all user Routes like Register and login

const express = require('express')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { userModel } = require('../Model/UserModel');
const userRouter = express.Router()


// signupRoute

userRouter.post("/signup", async (req,res)=>{

    const {email , password} = req.body
    if(!email || !password){
        res.send("Please enter your email and password")
    }else{
        try {
            const user = await userModel.findOne({email:email})
            if(user){
                res.send("User already exists Please Login")
            }else{
                 // get the details and save to database
                bcrypt.hash(password, 3, async function(err, hash_pass) {
                    // Store hash in your password DB.
                    if(err){
                        res.status(500).send({msg: err.message})
                    }else{
                        const new_user = new userModel({email,password:hash_pass})
                        await new_user.save()
                        res.status(201).send({msg :"User saved successfully"})
                    }
                });
            }
        } catch (error) {
            res.status(500).send({msg : error.message})
        }
    }

})


// Login Route

userRouter.post("/login", async function(req, res){
    const {email, password} = req.body
    if(!email || !password){
        res.send("Please enter your email and password")
    }else{
       try {
         // find the user with the email
         const  user = await userModel.findOne({email: email})
         let  hashpassword = user.password
         if(!user){
             res.send("This user does not exist Please register")
         }else{
             // comapre the password and generate the token
             bcrypt.compare(password, hashpassword, async function(err, result) {
                 // result == true
                 if(result){
                     const token = jwt.sign({userID : user._id}, 'nikhil');
                     res.status(200).send({msg:"login success",token : token});
                 }else{
                     res.status(401).send({msg:"login failed"})
                 }
             });
         }
       } catch (error) {
        console.log(error)
        res.send(error.message)
       }
    }
})

module.exports = {
    userRouter
}