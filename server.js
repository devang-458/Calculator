const express= require("express")
const path = require('path')
const app = express();

app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.json({
        msg: "Hello from the backend"
    })
})

app.listen(3000,()=>{
    console.log('Server is Running.')
})