const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/ads-data').then(()=>console.log('Connected to MongoDB')).catch((er)=>console.log(er))
app.use(express.json());
app.use(cors());

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:String,
    cover:String
})


// const UserSchema = new mongoose.Schema({
//   username:{type:String,required:true},
//   password:{type:String,required:true},
//   isadmin:{type:Boolean}
// });


//Admin Login

// Create the User model
const User = mongoose.model('adsadmin',new mongoose.Schema({
  username:{type:String,required:true},
  password:{type:String,required:true},
  isadmin:{type:Boolean}
},{ collection:'adsadmin'}
));

app.post('/login',async(req,res)=>{

  // const staticUsername = 'admin';
  // const staticPassword = 'password123';
  const { username, password } = req.body;

  const token = jwt.sign({username},'secret_key',{expiresIn:'30m'});

  try{
    const user = await User.findOne({username:username,password:password});
    if(user){
      res.status(200).json({username:username,password:password,token:token,isadmin:user.isadmin})
    }
    else{
      res.status(401).json({message:'Invalid Username or password'})
    }
  }catch(er){
    res.status(500).json({message:'Unexpected Error Try Later'});
  }

})



const ProductModel = mongoose.model('pants',productSchema);



app.get("/comfortpants",async(req,res)=>{
  try{
    const pants =  await  ProductModel.find();
    res.status(200).json(pants);
  }
  catch(er){
    res.status(500).json({error:'Failed to fetch comfort pants'});
  }
});

app.post('/comfortpants',async(req,res)=>{
  
  try{

    const { name } = req.body

    const existingName = await ProductModel.findOne({ name });
    
    if(existingName){
      res.status(400).json({message:'Data Already Exists in DB'});
      return;
    }

    const newpants = new ProductModel(req.body);
    const savedpant = await newpants.save();
    res.status(201).json(savedpant);
  }catch(error){
    res.status(500).json({error:'Failed Action Try Later !.....'});
  }
})


app.listen(3001,()=>{
    console.log('Server Running in node runtime');
});