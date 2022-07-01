import React from'react';
import "./App.css";
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Update from './components/Update';
import { useSelector } from 'react-redux';
const App=()=>{
  const userSignin=useSelector((state) =>state.userSignin);
  const { userInfo }=userSignin;
    return (
      <>
        <Navbar/>
        <Route exact path="/">
        <Home />
        </Route>

        <Route path="/about">
        <About />
        </Route>

        <Route path="/contact">
        <Contact />
        </Route>

        <Route path="/login">
        <Login />
        </Route>

        <Route path="/signup">
        <Signup />
        </Route>
         {
          userInfo && (
            <>
        <Route path="/update">
        <Update/>
        </Route>
            </>
          )
         }
       
          </>
)
}

export default App;