import './Navbar.css';
import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaArrowAltCircleRight} from "react-icons/fa"
import { ImSpoonKnife } from "react-icons/im";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
                     <li>
                        <ImSpoonKnife className='hamburger'/>

                      </li>
          <div className="logo">
              <h2>
                  <span>F</span>ood
                  <span>V</span>eda  
              </h2>
          </div>

            <div className="menu-link">
            <ul>
            {
               localStorage.getItem("userList")?
               <>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
               </> :
               
               <>

                    <li>
                        <Link to="/registration">Registration</Link>
                    </li>

                    <li>
                        <Link to="/">Login</Link>
                    </li>
              
               </>

            }
                     
                </ul>
            </div>

            <div className="social-media">
                <ul className="social-media-desktop">
                    <li>
                        <a href="https://facebook.com/">
                            <FaFacebook className='facebook'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/">
                        <FaInstagram className='instagram'/>

                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com/">
                        <FaYoutube className='youtube'/>

                        </a>
                    </li>
                    

                </ul>
                
            </div>

            {/* <div className="login-button">
                <ul className='login'>
                    <li>
                        <a href="./Login.js">
                        <FaArrowAltCircleRight className='login' /> 
                        </a>
                    </li>
                </ul>
            </div> */}
      </nav>     
    
    </>
    )
}

export default Navbar
