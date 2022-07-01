import mongoose from 'mongoose';


const otpSchema =new mongoose.Schema({
    email:{ type:String,required:true},
    otp:{type:Number,required:true},
    expireIn:{type:Number}
},{
    timestamps:true
});

let Otp =mongoose.model('otp',otpSchema);

export default Otp;