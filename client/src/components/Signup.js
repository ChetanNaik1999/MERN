import React,{useState} from'react';
import logo from '../images/logo1.jpg';
import { NavLink , useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { generateOtp, register } from '../actions/userActions';
const Signup=()=>{
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [otp,setOtp]=useState(Number);
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const dispatch=useDispatch();
  const getOtpResult =useSelector((state) => state.getOtpResult);
  const { message ,error}=getOtpResult;
  const userRegister=useSelector( state => state.userRegister);
  const { userInfo}=userRegister;
  const submitHandler=(e) =>{
    e.preventDefault();
    if(password === confirmPassword){
    dispatch(register(name,email,otp,password));
    }
    else{
      alert("Password and Confirm Password Are Not Matching");
    }
  }

    const getOtpNumber=()=>{
       dispatch(generateOtp(email));
   }  
    return (
        <>
       
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Congratulatios!</strong> Email is sent To Your E-mail Id
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
{
                      error && (
                        <>
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                          <strong>Please Enter OTP!</strong> {error}
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div>
                        </>
                      )
                  }


  
        <section className="signup container-fluid bg-light pt-1 pb-5 py-2">
            <div className="container">
             <div className="signup-content">
                 <div className="signup-form">
                     <h1 className="form-title text-center text-danger">Sign Up</h1>
                   
                     <form className="form" method="POST" onSubmit={submitHandler}>
                         <div>
                              <div class="mb-3">
    <label for="name" class="form-label"><i className="fa fa-user"></i>Enter Your Name:</label>
    <input type="text" class="form-control" id="name" name="name"  onChange={(e) =>setName(e.target.value)} required/>

  </div>
  <div class="mb-3">
    <label for="emali" class="form-label"><i className="fa fa-lock"></i>Enter Your E-mail:</label>
    <input type="email" class="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
  </div>

  <div class="mb-3">
    <label for="number" class="form-label"><i className="fa fa-lock"></i>Enter Your OTP</label>
    <input type="number" class="form-control" id="number" name="number" onChange={(e) =>setOtp(e.target.value)}  required />
     <button type='submit' className='btn-sm form-control text-white bg-danger my-2' onClick={()=>getOtpNumber(email)}>GET OTP</button> 
  </div>
  

  
  <div class="mb-3">
    <label for="password" class="form-label"><i className="fa fa-lock"></i>Password</label>
    <input type="password" class="password" id="password" name="password"  onChange={(e) => setPassword(e.target.value)} required/>
  </div>

  <div class="mb-3">
    <label for="cpassword" class="form-label"> <i className="fa fa-lock"></i>Confirm Password</label>
    <input type="password" class="form-control" id="cpassword"  name="cpassword" onChange={(e) => setConfirmPassword(e.target.value)} required />
  </div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
  
  </div>
  <NavLink to="/login" className="signup-image-link">I AM Already Register?</NavLink>
</form>


                 </div>
             </div>
            </div>
           
        </section>
        </>
    )
}

export default Signup;