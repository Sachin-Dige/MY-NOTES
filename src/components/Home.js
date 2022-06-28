import React from 'react'
import Navbar from './Navbar';  
import './Home.css'
import { MdDeleteForever } from "react-icons/md";

function Home() {
  let userList = JSON.parse(localStorage.getItem("userList"));
  
  // function Del() {


  //  localStorage.removeItem("userList");
 
  //   console.log(userList.id)
  // }
  return (
    <>
     <Navbar/>
      <div className="home-container">
        <table>
            <thead>
                
                    <tr>  
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Phone No.</th>
                      <th>  </th>
                    </tr>
                 
            </thead>
            <tbody>
              { userList.map((userList)=>(
             
            
                 <tr>
                    <td>{userList.name}</td> 
                    <td>{userList.email}</td>
                    <td>{userList.password}</td>
                    <td>{userList.phone}</td>
                    <td>{<MdDeleteForever style={{fontSize:"1.7rem", color:"darkred", cursor:"pointer" }} onClick={()=>{console.log(userList.id)}}  />}</td>
                 </tr>
              
            ))}
              
            </tbody>
        </table>
      </div>
    </>
  )
}

export default Home