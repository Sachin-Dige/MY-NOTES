import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css';
import Navbar from './Navbar';  


function Registration() {
  
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate=useNavigate();
  
  function handleSubmit(){
    let validationFlag = true;
    
      if (!fname) {
        document.getElementById("fnameError").innerHTML = "First name is required.";
        validationFlag = false
    } else if (fname.length > 15) {
        document.getElementById("fnameError").innerHTML = "Name should be maximum 15 characters.";
        validationFlag = false
    } else {
        document.getElementById("fnameError").innerHTML = "";
    }


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
          
       if (!phone) {
        document.getElementById("phoneError").innerHTML = "Phone number is required.";
        validationFlag = false
    } else if (phone.length > 10 || phone.length < 10 ) {
        document.getElementById("phoneError").innerHTML = "Phone number should be of 10 digit.";
        validationFlag = false    
    } else {
        document.getElementById("phoneError").innerHTML = "";
    }
    
    
    if (!validationFlag) {
      return false
  }
    

      const user = {
        id:new Date().getTime().toString(),
        name:fname,
        email:email,
        password:password,
        phone:phone 
      }
      let userList = JSON.parse(localStorage.getItem("userList"));
      
      if(userList && userList.length > 0 ) {
        userList.push(user)
        localStorage.setItem("userList", JSON.stringify(userList));
      }else{
        localStorage.setItem("userList", JSON.stringify([user]));
      }
      
      // window.location.pathname="/";
      navigate("/");
      return false
      

  }
  function validateWithPatternEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  return (
    <>
   <Navbar/>
    <div className="container-regi">
    
        
        <h1>Register</h1>
        
            <input type="text" name='fname'  value={fname} placeholder='Enter user name'  onChange={(e)=>{setFname(e.target.value)}} />
            <br/>
            <small style={{color:"red"}} id="fnameError"></small>
            <br/>
            
            <input type="email" name='email' value={email} placeholder='Enter user email id'   onChange={(e)=>{setEmail(e.target.value)}} />
            <br/>
            <small style={{color:"red"}} id="emailError"></small>
            <br/>
            
            <input type="password" name='password' value={password} placeholder='Enter user password'  onChange={(e)=>{setPassword(e.target.value)}} />
            <br/>
            <small style={{color:"red"}} id="passwordError"></small>
            <br/>
            
            <input type="phone" name='phone' value={phone} placeholder='Enter user contact number'  onChange={(e)=>{setPhone(e.target.value)}} /> 
            <br/>
            <small style={{color:"red"}} id="phoneError"></small>
            <br/><br/> 
           <button type="submit"  onClick={handleSubmit}>Submit</button>
            <br/><br/>
           
           <Link to='/'>Are you already registered?</Link>

      </div>
      
    </>
  )
}

export default Registration
