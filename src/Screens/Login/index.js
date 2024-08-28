import React, { useState } from "react";
import NavBar from "../../Component/NavBar";
import TextInput from "../../Component/TextInput";
import "./login.css";
import TextInput2 from "../../Component/TextInput/TextInput2";
import SelectInput from "../../Component/SelectInput";
import { Link } from "react-router-dom";
import Footer from "../../Component/Footer";
const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div>
      <NavBar />
      <div className="row d-flex align-items-center">
        <div className="col-6">
          <img
            src={require("../../Images/registrationbg.png")}
            style={{ height: "100vh", width: "90%" }}
          />
        </div>
        <div className="col-6">
          <h1 className="poppins-semibold fontColor">Login</h1>
          <div className="m-3" />
          <div className="row">
            <div className="col-10">
              <TextInput2
                placeHolder="Enter Email"
                label="Email"
                labelColor={"#717171"}
                backgroundColor={"#FFE1E1"}
              />
            </div>
            <div className="col-10">
              <TextInput2
                placeHolder="Password"
                label="Enter Password"
                labelColor={"#717171"}
                backgroundColor={"#FFE1E1"}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-5 fontColor">
          <div className="d-flex align-items-center AgreementContainer">
            <input
              type="checkbox"
              id="agreementCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="AgreementCheckbox"
            />
            <label
              htmlFor="agreementCheckbox"
              className="AgreementText poppins-regular"
            >
             
              <a rel="noopener noreferrer">
                Remember Me
              </a>
              
            </label>
          </div>
          </div>
          <div className="col-5 fontColor">
          <a href="/terms" className="fontColor d-flex justify-content-end poppins-regular mt-1" target="_blank" rel="noopener noreferrer">
               Forgot Password
              </a>
          </div>
          </div>

          <div className=" mt-4">
            <Link to={"/Register"}>
              <button className="btn-register  ">Login</button>
            </Link>
            <div className="m-3"></div>
            <Link to="/Login">
              <label
                class="cursor text-black poppins-regular "
                style={{ marginLeft: 140 }}
              >
                Don't Have Account?{" "}
                <a href="#" className="text-decoration-underline fontColor">
                  Log in
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
