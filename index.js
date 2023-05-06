const express=require("express")
var cors = require('cors')
require('dotenv').config()
const {connection}=require("./config/db")
const { userRouter } = require("./routes/user.route")

const app=express()

app.use(express.json())
app.use(cors())
app.use("/notice",userRouter)

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connected to the db")
    } catch (error) {
        console.log(error)
    }
    console.log(`Listning on port ${process.env.port}`)
})