import React from "react";
import "./Register.css";
import backimage from "../../Images/register-bg.png";
import { Link } from "react-router-dom";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import TextInput from "../../Component/TextInput";
const Register = () => {
  return (
    <div
    // className="registerbg"
    // style={{ backgroundImage: `url(${backimage})` }}
    >
      <NavBar />
      <div className="py-3"></div>
      <div className="registercontainer">
        <div className="registerform">
          <h3 className="text-white mb-1">Registeration</h3>
          <label className="m-0 text-white">Register Yourself</label>
          <div>
            <div className="m-3"></div>
            <TextInput
              placeHolder="Enter Email"
              label="Enter Email"
              labelColor={"white"}
            />
            <TextInput
              placeHolder="Enter Phone Number"
              label="Enter Phone Number"
              labelColor={"white"}
            />
            {/* <TextInput placeHolder="Enter CNIC" label="Enter CNIC" /> */}
            <TextInput
              placeHolder="Enter Password"
              label="Enter Password"
              labelColor={"white"}
            />
            <button className="form-control">Register</button>
            <div className="m-3"></div>
            <Link to="/Login">
              <label class="cursor">
                Already have an account?{" "}
                <a href="#" class="text-decoration-underline">
                  Log in
                </a>
              </label>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-3"></div>
      <Footer />
    </div>
  );
};

export default Register;
