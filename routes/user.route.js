const express=require("express")
const{userModel}=require("../models/users.model")

const userRouter=express.Router()

userRouter.post("/create",async(req,res)=>{
    try {
        let payload=req.body
    req.body.date=new Date()
    let newNotice= new userModel(req.body)
    await newNotice.save()
    res.status(201).send({"Message":"Notice Created Successfully"})
    } catch (error) {
        console.log(error.Message)
        res.status(401).send({"Message":"Server Error"})
    }
})

userRouter.get("/all",async(req,res)=>{
    try {
        let allData=await userModel.find()
        res.status(200).send({"allData":allData})
    } catch (error) {
        console.log(error.Message)
        res.status(401).send({"Message":"Server Error"})
    }
})

userRouter.delete("/delete/:id",async(req,res)=>{
    try {
        let id=req.params.id
        await userModel.findByIdAndDelete({_id:id})
        res.status(200).send({"Message":"Notice Deleted Succssfully"})
    } catch (error) {
        console.log(error.Message)
        res.status(401).send({"Message":"Server Error"})
    }
})

userRouter.patch("/update/:id",async(req,res)=>{
    try {
        let id=req.params.id
        let data=req.body
        await userModel.findByIdAndUpdate({_id:id},data)
        let newdata=userModel.findById({_id:id})
        res.status(200).send({"data":newdata,"Message":"Data updated successfully"})
    } catch (error) {
        console.log(error.Message)
        res.status(401).send({"Message":"Server Error"})
    }
})

module.exports={
    userRouter
}