import React from 'react'
import './Events.css'
import backimage from "../../Images/eventbg.png";
import { Link } from 'react-router-dom';
import NavBar from '../../Component/NavBar';
import Footer from '../../Component/Footer';
import TextInput from '../../Component/TextInput';
const Events = () => {
  return (
    <div
    className="registerbg"
    style={{ backgroundImage: `url(${backimage})` }}
  >
  <NavBar />

 <div className="registercontainer">
    <div className="registerform">
        <h3 className='text-white mb-1'>Event</h3>
        <div>
            {/* <div className='m-3'></div>
            <TextInput placeHolder="Enter Email" label="Enter Email" />
            <TextInput placeHolder="Enter Phone Number" label="Enter Phone Number" />
            <TextInput placeHolder="Enter Password" label="Enter Password" />
            <button className='form-control'>Register</button>
            <div className='m-3'></div>
            <Link to="/Login">
            <label class="cursor">Already have an account? <a href="#" class="text-decoration-underline">Log in</a></label>
            </Link> */}

        </div>
    </div>
    </div> 
    {/* <Footer/> */}
  </div>
  )
}

export default Events
