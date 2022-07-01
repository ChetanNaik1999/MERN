import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
const Navbar = () => {
  const userSignin=useSelector((state) => state.userSignin);
  const { userInfo }=userSignin;
  const dispatch=useDispatch();
  const signOutHandler=()=>{
    dispatch(signout());
}

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            <img src={logo} alt="logo" className="img" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Log In</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Registration</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/update">Update Profile</NavLink>
              </li>

              <li>
                    <NavLink to="#signout" onClick={signOutHandler}>Sign Out</NavLink>
                    </li>

            </ul>
            {
              userInfo && (
                <>
                 <h4 className='mx-2'>Welcome! {userInfo.name}</h4>
                </>
              )
            }
           
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;