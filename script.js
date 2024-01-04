const express = require('express');
const app = express();

const mongoose = require("mongoose");

const DB = "mongodb+srv://MERNSTACK:yARtgTCNoJ9iJPHQ@cluster0.hf0d1co.mongodb.net/database?retryWrites=true&w=majority"

mongoose.connect(DB)

const User = mongoose.model("Users",{
    name: String,
    email: String,
    password: String
  })

app.use(express.json())

app.post("/signup", async function(req,res){
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name
    
    const existingUser = await User.findOne({email: username})
    if(existingUser ){
        return res.status(400).send("Username already exist")
    }

    const user = new User({
        name: "Devang",
        email: "adlf@gmail.com",
        password: "sdfjasidg"
      })
      
      user.save()
      res.json({
        "msg":"User created succe ssfully"
      })

})
