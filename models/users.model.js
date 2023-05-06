const mongoose=require("mongoose")
require('dotenv').config()
let userSchema=mongoose.Schema({
    autherName:String,
    noticeTitle:String,
    noticeDescription:String,
    date:Date
})

let userModel=mongoose.model("user",userSchema)

module.exports={
    userModel
}