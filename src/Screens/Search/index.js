import React, { useState } from "react";
import "./Search.css";
import TextInput2 from "../../Component/TextInput/TextInput2";
import SelectInput from "../../Component/SelectInput";
import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";
const Search = () => {
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
  return (
    <div>
      <NavBar/>
      <div class="background-container">
        <div className="text-overlay">
          <h1 className="poppins-medium">Find Your</h1>
          <p className="pacifico-regular patnerfontSize">Life Partner</p>
        </div>
      </div>
      <div className="m-3" />
      <div
        className="d-flex justify-content-center align-items-center flex-column py-5"
        style={{ backgroundColor: "#FFE1E1" }}
      >
        <img src={require("../../Images/avatarProfile.png")} />
        <h1 className="poppins-medium my-3">Profile</h1>
        <button className="btns">Update Profile</button>
      </div>
      <div className="m-3" />
      <div className="container">
        <h3 className="fontColor">Personal Info</h3>
        <div className="row">
          <div className="col-4">
            <TextInput2
              placeHolder="First Name"
              label="First Name"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
            <TextInput2
              placeHolder="Middle Name"
              label="Middle Name"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
            <TextInput2
              placeHolder="Last Name"
              label="Last Name"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <TextInput2
              placeHolder="Father Name"
              label="Father Name"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
            <TextInput2
              placeHolder="Age"
              label="Age"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
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
          <div className="col-4">
            <TextInput2
              placeHolder="Marital Status"
              label="Marital Status"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
            <TextInput2
              placeHolder="Religion"
              label="Religion"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
            <TextInput2
              placeHolder="Religious Sect"
              label="Religious Sect"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
        </div>
      </div>
      <div className="m-3" />
      <div className="container">
        <h3 className="fontColor">Address</h3>
        <div className="row">
          <div className="col-4">
            <TextInput2
              placeHolder="Country"
              label="Country"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
            <TextInput2
              placeHolder="Provience"
              label="Provience"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
            <TextInput2
              placeHolder="City"
              label="City"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <TextInput2
              placeHolder="Street Address"
              label="Street Address"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
            <TextInput2
              placeHolder="Zip / Code"
              label="Zip / Code"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
       
        </div>
       
      </div>
      <div className="m-3" />
      <div className="container">
        <h3 className="fontColor">Partner Requirments</h3>
        <div className="row">
          <div className="col-4">
            <TextInput2
              placeHolder="Looking For"
              label="Looking For"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
            <TextInput2
              placeHolder="Martial Status"
              label="Martial Status"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
            <TextInput2
              placeHolder="Age (From)"
              label="Age (From)"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <TextInput2
              placeHolder="Age (To)"
              label="Age (To)"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
            <TextInput2
              placeHolder="Religion"
              label="Religion"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
            <TextInput2
              placeHolder="Religious Sect"
              label="Religious Sect"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
       
        </div>
        <div className="row">
          <div className="col-4">
            <TextInput2
              placeHolder="Family Members"
              label="Family Members"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
            <TextInput2
              placeHolder="Height"
              label="Height"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
          <div className="col-4">
            <TextInput2
              placeHolder="County/Province"
              label="County/Province"
              labelColor={"#717171"}
              backgroundColor={"#FFE1E1"}
            />
          </div>
       
        </div>
       
      </div>
      <div className="p-4" />
      <div className="d-flex align-items-center justify-content-center">
      <button className="btns">Save</button>
      </div>
      <div className="p-4" />
      <Footer/>
    </div>
  );
};

export default Search;
