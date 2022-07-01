import Axios from "axios";
import { GET_OTP_FAIL, GET_OTP_REQUEST, GET_OTP_SUCCESS, UPDATE_FAIL, UPDATE_REQUEST, UPDATE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants";



export const signin=(email,password)=>async(dispatch)=>{
    dispatch({type:USER_SIGNIN_REQUEST,payload:{email,password}});
    try{ 
   const { data} =await Axios.post('/login',{email,password});
   dispatch({ type:USER_SIGNIN_SUCCESS,payload:data});
   localStorage.setItem("userInfo",JSON.stringify(data));
    }
    catch(error){
        dispatch({type:USER_SIGNIN_FAIL,payload:error.response &&  error.response.data.message
            ? error.response.data.message
            : error.message,})
    }
}

export const register=(name,email,otp,password)=>async(dispatch)=>{
    dispatch({type:USER_REGISTER_REQUEST,payload:{name,email,otp,password}});
    try{ 
   const { data} =await Axios.post('/register',{name, email,otp,password});
   dispatch({ type:USER_REGISTER_SUCCESS,payload:data});
   dispatch({ type:USER_SIGNIN_SUCCESS,payload:data});
   localStorage.setItem("userInfo",JSON.stringify(data));
    }
    catch(error){
        dispatch({type:USER_REGISTER_FAIL,payload:error.response &&  error.response.data.message
            ? error.response.data.message
            : error.message,})
    }
}

export const upadateUserProfile=(id,name,email,password) => async(dispatch,getState)=>{
    dispatch({ type:UPDATE_REQUEST, payload:{name,email,password}});
    
    try {
        const { data}=await Axios.put(`/profile/${id}`,{name,email,password});
        dispatch({ type:UPDATE_SUCCESS ,payload:data});
        dispatch({ type:USER_SIGNIN_SUCCESS,payload:data});
        localStorage.setItem('userInfo',JSON.stringify(data));
    } catch (error) {
        dispatch({ type:UPDATE_FAIL,payload:error.message});
    }
}

export const signout=()=>(dispatch)=>{
    localStorage.removeItem('userInfo');
    dispatch({type:USER_SIGNOUT});
 }



export const generateOtp =(email) =>async(dispatch) =>{
    dispatch({type:GET_OTP_REQUEST,payload:{email}});
    try{ 
   const { data} =await Axios.post('/sendotp',{ email});
   dispatch({ type:GET_OTP_SUCCESS,payload:data});
    }
    catch(error){
        dispatch({type:GET_OTP_FAIL,payload:error.response &&  error.response.data.message
            ? error.response.data.message
            : error.message,})
    }
}
