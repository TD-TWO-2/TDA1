import React from "react";
import "./login.css";
import backimage from "../../Images/loginbg.png";
import { Link } from "react-router-dom";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import TextInput from "../../Component/TextInput";
const Login = () => {
  return (
    // className="loginbg" style={{ backgroundImage: `url(${backimage})` }}
    <div >
      <NavBar />
      <div className="py-3"></div>
      <div className="logincontainer">
        <div className="loginform">
          <h3 className="text-white mb-1">Login</h3>
          <label className="m-0 text-white">Please Enter Your Details Below</label>
          <div>
            <div className="m-3"></div>
            <TextInput placeHolder="Enter Email" label="Enter Email" labelColor={'white'} />
            <TextInput placeHolder="Enter Password" label="Enter Password" labelColor={'white'}  />
            <Link to="/UserInfo">
              <button className="form-control">Login</button>
            </Link>
            <div className="m-3"></div>
            <Link to="/Register">
              <label class="cursor">
                Don't have an account?{" "}
                <a href="#" class="text-decoration-underline">
                  Register
                </a>
              </label>
            </Link>
          </div>
        </div>
      </div>
        <div className="py-4"></div>
      <Footer />
    </div>
  );
};

export default Login;
