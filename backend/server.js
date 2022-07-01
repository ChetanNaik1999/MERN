import express from "express";
import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import User from "./models/userModel.js";
import Otp from "./models/otpModel.js";
import nodemailer from "nodemailer";
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
const port=process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/my-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("Conneted");
}).catch((error)=>{
   console.log(error);
});


app.post('/login',async(req,res)=>{
    const user=await User.findOne({email:req.body.email});
    if(user){
      if(bcrypt.compareSync(req.body.password,user.password)){
        res.send({
          _id:user._id,
          name:user.name,
         email:user.email
        });
        return;
      }
    }
    res.status(401).send({message:"Invalid email or password"});
});
  

app.put('/profile',async(req,res)=>{
    const user=await User.findById(req.params.id);
    if(user){
      user.name= req.body.name || user.name;
      user.email=req.body.email || user.email;
      if(req.body.password){
        user.password=bcrypt.hashSync(req.body.password ,8);
      }
      const updatedUser =await User.save();
      res.send({
        _id:updatedUser._id,
        name:updatedUser.name,
        email:updatedUser.email,
     })
    }
  });



app.post('/register',async(req,res) =>{
    const isValid=await Otp.findOne({otp:req.body.otp});
    if(isValid){
      let currentTime = new Date().getTime();
      let diff = isValid.expireIn - currentTime;
      if(diff < 0){
        await Otp.deleteOne({otp:req.body.otp});
        res.status(404).send({message:"Token Expire"});
        return;
      }
    }
    if(isValid){
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password,8),
        otp:req.body.otp
    });
    const createdUser=await user.save();
    if(createdUser){
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        type:"oauth2",
        auth: {
          user: "chetannaik775@gmail.com", // generated ethereal user
          pass: "edkzgxmqyjxzoveh", // generated ethereal password
        }});
        
        transporter.verify(async function(error, success) {
        if (error) {
          console.log(error);
        } else {
          let info = await transporter.sendMail({
              from: '"YOUR OTP FOR REGISTRATION 👻" <chetannaik775@gmail.com>', // sender address
              to: createdUser.email, // list of receivers
              subject: "REQUEST FOR EMAIL VERIFICATION", // Subject line
              text: "EMAIL VERIFICATION", // plain text body
              html: `<h3>Congratulations!</h3>
              <h4>Your Accout Is Successfully Created</h4>`, // html body
          });
          console.log(info);
          console.log("Server is ready to take our messages");
        }});
    }
    res.status(200).send({
      _id:createdUser._id,
      name:createdUser.name,
     email:createdUser.email
    });
  }
  else{
       res.send({"message":"Invalid Token or Inavalid OTP"});
  }

});


app.post('/sendotp',async(req,res)=>{
     const userEmail=req.body.email;
     if(req.body.email){
     let otpCode =Math.floor((Math.random()*10000)+1);
     const data =new Otp({
      email:req.body.email,
      otp:otpCode,
      expireIn:new Date().getTime() + 300*1000
     });
    
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      type:"oauth2",
      auth: {
        user: "chetannaik775@gmail.com", // generated ethereal user
        pass: "edkzgxmqyjxzoveh", // generated ethereal password
      }});
      
      transporter.verify(async function(error, success) {
      if (error) {
        console.log(error);
      } else {
        let info = await transporter.sendMail({
            from: '"YOUR OTP FOR REGISTRATION 👻" <chetannaik775@gmail.com>', // sender address
            to: userEmail, // list of receivers
            subject: "REQUEST FOR EMAIL VERIFICATION", // Subject line
            text: "AMAZAONA", // plain text body
            html: `<h3>Your Otp for Verification is ${otpCode}.The Otp Will Be Valid for 5 Minutes Please Do Not Share This OTP</h3>
            <h3>Thanks and Regards</h3>`, // html body
        });
        console.log(info);
        console.log("Server is ready to take our messages");
      }});

      let otpData =await data.save();
      res.status(200).send({"message":"OTP send To Your Email",success:true});
    }
    else{
      res.status(400).send("Invalid Email Please Check Your E-mail");
    }
});


app.listen(5000,()=>{
    console.log(`Server At http://localhost:${port}`);
})
