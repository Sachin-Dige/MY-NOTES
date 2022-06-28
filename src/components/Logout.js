import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

function Logout({loggedout}) {
   const navigate=useNavigate();
   
   function logout(){
       <Navbar/>
       loggedout();
       navigate('/')
       alert("Want to Logout? Click below!!!")
       localStorage.removeItem("isLogin");
      //  localStorage.removeItem("userList");
    }
  return (
    <>  
        <button onClick={logout} style={{textAlign:"center", marginTop:"25rem", marginLeft:"50rem"}} >Logout</button>
    </>
  )
}

export default Logout