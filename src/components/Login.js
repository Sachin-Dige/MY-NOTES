import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from './Navbar';  

function Login({authenticate}) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  

  function handleSubmitLogin(){
    let validationFlag = true;
      
    
    let userList=JSON.parse(localStorage.getItem('userList'));
    
    if (!email) {
      document.getElementById("emailError").innerHTML = "Email is required.";
      validationFlag = false
    } else if (!validateWithPatternEmail(email)) {
      document.getElementById("emailError").innerHTML = "Email should be a valid.";
      validationFlag = false
    } else {
      document.getElementById("emailError").innerHTML = "";
    }
    
    
    if (!password) {
      document.getElementById("passwordError").innerHTML = "Password is required.";
      validationFlag = false
    } else if (password.length < 6) {
      document.getElementById("passwordError").innerHTML = "Password should be at least 6 characters.";
      validationFlag = false
    } else {
      document.getElementById("passwordError").innerHTML = "";
    }
    
    if (!validationFlag) {
      return false
    }
    
    for(let user of userList) {
         if(user.email === email && user.password === password){
           
           localStorage.setItem("isLogin",true);
           document.getElementById("incorrect").innerHTML=""
          authenticate();
          navigate("/home");
          return false
        }else{    
          
          document.getElementById("incorrect").innerHTML="Email or Password is Invalid!!"    
          validationFlag = false
          
        }     
    }
  
   
    
  }
  function validateWithPatternEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

return (
         <>
       <Navbar/>
      <div className="container-login">
        
        <h1>Login</h1>
        <div className="login-inputs">
        <small style={{color:"red"}} id="incorrect"></small>
            <br/>
            <input type="email" name='email' value={email} placeholder='Enter user email id' onChange={(event)=>setEmail(event.target.value)} />
            <br/>
            <small style={{color:"red"}} id="emailError"></small>
            <br/>
            
            <input type="password" name='password' value={password} placeholder='Enter user password' onChange={(event)=>setPassword(event.target.value)} />
            <br/>
            <small style={{color:"red"}} id="passwordError"></small>
            <br/>
        
           <button type="button"  onClick={handleSubmitLogin} >Submit</button>
        </div>
        <br/>
        <Link to='/registration' >Creater new account!!!</Link>

    </div> 
    
    </>
  )
}

export default Login