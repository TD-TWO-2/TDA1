import React from "react";
import "./login.css";
import backimage from "../../Images/loginbg.png";
import { Link } from "react-router-dom";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import TextInput from "../../Component/TextInput";
const Login = () => {
  return (
    <div className="loginbg" style={{ backgroundImage: `url(${backimage})` }}>
      <NavBar />
      <div className="logincontainer">
        <div className="loginform">
          <h3 className="text-white mb-1">Login</h3>
          <label className="m-0 text-white">Please Enter Your Details Below</label>
          <div>
            <div className="m-3"></div>
            <TextInput placeHolder="Enter Email" label="Enter Email" />
            <TextInput placeHolder="Enter Password" label="Enter Password" />
            <Link to="/UserInfo">
              <button className="form-control">Login</button>
            </Link>
            <div className="m-3"></div>
            <Link to="/Register">
              <label class="cursor">
                Don't have an account?{" "}
                <a href="#" class="text-decoration-underline">
                  login
                </a>
              </label>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
