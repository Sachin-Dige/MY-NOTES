import React from 'react'
import logo from './img/logo.jpeg'


const Header = () => {
    return (
    <>
    <div className='header'>
        <img src={logo} alt='logo' width="70" height="50"/>
        <h1> My~Notes</h1>
    </div>
    </>
  );
};



export default Header
