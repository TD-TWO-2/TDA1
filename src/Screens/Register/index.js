import React, { useState } from "react";
import NavBar from "../../Component/NavBar";
import TextInput from "../../Component/TextInput";
import "./Register.css";
import TextInput2 from "../../Component/TextInput/TextInput2";
import SelectInput from "../../Component/SelectInput";
import { Link } from "react-router-dom";
import Footer from "../../Component/Footer";
const Register = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (name, value) => {
    setSelectedValue(value);
    console.log(name, value);
  };

  const options = [
    { value: "option1", label: "Male" },
    { value: "option2", label: "Female" },
    { value: "option3", label: "Other" },
  ];
  const MaritalStatus = [
    { value: "option1", label: "Single" },
    { value: "option2", label: "Married" },
    { value: "option3", label: "Widowed" },
    { value: "option3", label: "Divorced" },
  ];

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div>
      <NavBar />
      <div className="row d-flex align-items-center">
        <div className="col-6">
          <img src={require("../../Images/registrationbg.png")} style={{height:'100vh', width:'90%'}} />
        </div>
        <div className="col-6">
          <h1 className="poppins-semibold fontColor">Registration</h1>
          <div className="row">
            <div className="col-5">
              <TextInput2
                placeHolder="First Name"
                label="First Name"
                labelColor={"#717171"}
                backgroundColor={"#FFE1E1"}
              />
            </div>
            <div className="col-5">
              <TextInput2
                placeHolder="Last Name"
                label="Last Name"
                labelColor={"#717171"}
                backgroundColor={"#FFE1E1"}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <TextInput2
                placeHolder="Email"
                label="Email"
                labelColor={"#717171"}
                backgroundColor={"#FFE1E1"}
              />
            </div>
            <div className="col-5">
              <SelectInput
                label="Select Gender"
                options={options}
                backgroundColor="#FFE1E1"
                labelColor="#333"
                onChange={handleSelectChange}
                name="exampleSelect"
                // required={true}
                showError={selectedValue === ""}
                value={selectedValue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <TextInput2
                placeHolder="Password"
                label="Password"
                labelColor={"#717171"}
                backgroundColor={"#FFE1E1"}
              />
            </div>
            <div className="col-5">
              <TextInput2
                placeHolder="Re-Enter Password"
                label="Re-Enter Password"
                labelColor={"#717171"}
                backgroundColor={"#FFE1E1"}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <SelectInput
                label="Marital Status"
                options={MaritalStatus}
                backgroundColor="#FFE1E1"
                labelColor="#333"
                onChange={handleSelectChange}
                name="exampleSelect"
                // required={true}
                showError={selectedValue === ""}
                value={selectedValue}
              />
            </div>
            <div className="col-5">
              <TextInput2
                placeHolder="Mobile Number"
                label="Mobile Number"
                labelColor={"#717171"}
                backgroundColor={"#FFE1E1"}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <SelectInput
                label="Country"
                options={MaritalStatus}
                backgroundColor="#FFE1E1"
                labelColor="#333"
                onChange={handleSelectChange}
                name="exampleSelect"
                // required={true}
                showError={selectedValue === ""}
                value={selectedValue}
              />
            </div>
            <div className="col-5">
              <SelectInput
                label="City"
                options={MaritalStatus}
                backgroundColor="#FFE1E1"
                labelColor="#333"
                onChange={handleSelectChange}
                name="exampleSelect"
                // required={true}
                showError={selectedValue === ""}
                value={selectedValue}
              />
            </div>
          </div>

          <div className="d-flex align-items-center AgreementContainer">
      <input
        type="checkbox"
        id="agreementCheckbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="AgreementCheckbox"
      />
      <label htmlFor="agreementCheckbox" className="AgreementText poppins-regular">
        Signing means you agree to our{" "}
        <a href="/terms" target="_blank" rel="noopener noreferrer">
          Terms & Conditions
        </a>{" "}
        and{" "}
        <a href="/privacy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>.
      </label>
    </div>

          <div className=" mt-4">
            <Link to={"/Register"}>
              <button className="btn-register  ">Register Now</button>
            </Link>
            <div className="m-3"></div>
            <Link to="/Login">
              <label class="cursor text-black poppins-regular " style={{marginLeft:120}}>
                Already have an account?{" "}
                <a href="#" className="text-decoration-underline fontColor">
                  Log in
                </a>
              </label>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
