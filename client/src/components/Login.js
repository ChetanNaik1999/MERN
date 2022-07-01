import React, { useState } from'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signin } from '../actions/userActions';



const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();

    const submitHandler = (e) =>{
      e.preventDefault();
      dispatch(signin(email,password));
    }
    return (
        <>
           <section className="signin container-fluid bg-light pt-1 pb-5" >
            <div className="container">
             <div className="signin-content">
                 <div className="signin-form">
                     <h1 className="form-title text-center text-danger">SignIn</h1>
                     <form className="form" onSubmit={submitHandler}>
                         <div>
                             
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"><i className="fa fa-user"></i>Enter Your E-mail:</label>
    <input type="email" class="form-control" id="email" onChange={(e) =>setEmail(e.target.value)} />
  </div>

   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"><i className="fa fa-user"></i>Password</label>
    <input type="password" class="form-control" id="password"  onChange={(e) =>setPassword(e.target.value)}/>
  </div>
<button type="submit" class="btn btn-primary">Log In</button>
  
  </div>
  <NavLink to="/signup" className="signin-image-link">Create New Account?</NavLink>
</form>
                 </div>
             </div>
            </div>
           
        </section>
        </>
    )
}

export default Login;