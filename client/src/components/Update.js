import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { upadateUserProfile } from '../actions/userActions';

const Update = () => {
  
  const userSignin=useSelector((state) =>state.userSignin);
  const {userInfo}=userSignin;
  
  const [name,setName]=useState(userInfo.name);
  const [email,setEmail]=useState(userInfo.email);
  const [password,setPasword]=useState(userInfo.password);
  const [confirmpassword,setConfirmPassword]=useState("");
  
  const dispatch=useDispatch();
  const submitHandler =(e) =>{
    e.preventDefault();
    dispatch(upadateUserProfile({name,email,password}));
  }
  return (
    <div>
      <form onSubmit={submitHandler} className="m-auto">

      <div class="mb-3">
    <label for="name" class="form-label">Enter name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" onChange={(e) =>setName(e.target.value)} value={name}/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" onChange={(e) =>setPasword(e.target.value)} value={password}/>
  </div>
 
  <div class="mb-3">
    <label for="confirmpassword" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="confirmpassword" onChange={(e) =>setConfirmPassword(e.target.value) }/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Update