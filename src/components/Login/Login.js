import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';

import  { useEffect, useState } from "react";
import "./Login.css";
import {auth,provider}  from "./Config.js"
import {signInWithPopup} from "firebase/auth"
import Home from "../Home/Home.js"

const Login = () => {
  const [value,setValue] = useState('')
  const handleClick =()=>{
   
      signInWithPopup(auth,provider).then((data)=>{
          setValue(data.user.email)
          localStorage.setItem("email",data.user.email)
      })
  }

  useEffect(()=>{
      setValue(localStorage.getItem('email'))
  })
  return (
    <div className="d">
    {value?<Home/>:
    <>
    <div>
    <center  className="cent" style={{padding:'250px'}}>
       <h1 style={{color:'white'}}>Login In With</h1>
      <GoogleIcon sx={{fontSize:'100px' ,color:'white'}} onClick={handleClick} />
      </center>

  </div>
    
    </>
    }
    </div>
    
  )
}

export default Login
