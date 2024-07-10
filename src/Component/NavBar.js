import React from 'react'
// import logo from '../Images/azwaajlogo.png';
import logo from '../Images/azwgold.png';
import { Outlet, Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()
  const handelRegisterPress = () => {
    navigate('Register')
  }
  function show_nav(){
    let nav = document.querySelector("header nav");
    nav.classList.add("show");
  }
  function hide_nav(){
    let nav = document.querySelector("header nav");
    nav.classList.remove("show");
  }
  return (
    <>
      <header>
        <div className="logo">
        <Link to='/'>
          <img src={logo} alt="azwaaj Logo" />
        </Link>
        </div>
      
        <div className="hamburger">
        <i class="fa-solid fa-bars" onClick={()=>{show_nav()}}></i>
        </div>

        <nav>
        <div className="close">
        <i class="fa-solid fa-xmark" onClick={()=>{hide_nav()}}></i>
        </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Search">Search</Link></li>
            <li><Link to="/Events">Event</Link></li>
            <li><Link to="/Contact">Contact us</Link></li>
            <li><Link to="/Aboutus">About Us</Link></li>
          </ul>
        </nav>
          <Outlet />
        <div className="">
        {/* <button onClick={()=>handelRegisterPress()} >Register</button> */}
        </div>


      </header>
    </>
  )
}

export default NavBar