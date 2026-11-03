import express from "express";
const app=express();

app.get("/",(req,res)=>{
    res.status(200).send("Hello World")
})
app.get("/api/health",(req,res)=>{
    res.status(200).json({status:"ok"})
})
app.get("/api/products",(req,res)=>{
    const data=[{
        age: 25
    }]
    res.status(200).json(data);
})
app.listen(3000,()=>{
   console.log("Server is running on port 3000")
})