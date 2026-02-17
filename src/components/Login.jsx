import React, { use } from "react";
import "../styles/LoginPage.css";
import axios from "axios";
import {loginUpdate }from '../store/LoginSlice'
import { useDispatch } from "react-redux";

const USER_AUTH = {
   "grant_type":"client_credentials",
   
    "Client_ID": "8800212800004724b8aed8dc5f4b2fca" ,
    "Client_Secret" : "4b0dc981123d4e5fa6f963978c12ae6a",

};

const LOGIN_API = "https://accounts.spotify.com/api/token"

const Login  =()=>{
    const dispatch=useDispatch();


    const handleLogin = async() =>{
     let res = await axios.post(LOGIN_API, USER_AUTH, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        dispatch(loginUpdate(res));
//console.log(res);
    }



    return (
       <div className="login-page">
        <div className="login-content">
            <div className="login-button" onClick={handleLogin} >
                Login to your Spotify!
            </div>
        </div>
       </div>

    )
}

export default Login;