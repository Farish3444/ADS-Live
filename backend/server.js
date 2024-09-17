const express = require('express')
const mongoose = require('mongoose')
const app = express()



mongoose.connect('mongodb://localhost:27017/ads-data').then(()=>console.log('Connected to MongoDB')).catch((er)=>console.log(er))

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:String,
    cover:String
})

const ProductModel = mongoose.model('pants',productSchema);

app.get("/comfortpants",async(req,res)=>{
  try{
    const pants = await ProductModel.find();
    res.status(200).json(pants);
  }
  catch(er){
    res.status(500).json({error:'Failed to fetch comfort pants'});
  }
});



app.listen(3001,()=>{
    console.log('Server Running in node runtime');
})