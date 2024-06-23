import React from "react";
import backimage from "../../Images/loginbg.png";
import { Link } from "react-router-dom";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import "./UserInfo.css";
import TextInput from "../../Component/TextInput";
const UserInfo = () => {
  return (
    <>
      <div
        // className="userInfobg"
        style={{ backgroundImage: `url(${backimage})` }}
      >
        <NavBar />
        <div className="p-4"/>
        <div className="userInfocontainer">
          <div className="userInfoform">
            <h2 className="text-white font-weight-bold text-center">Profile</h2>
            <div className="d-flex flex-column align-items-center">
              <div className="bg-white rounded mb-3">
              <img src={require('../../Images/account-followers.png')} width={60} height={60}/>
              </div>
              <h6 className="text-white font-weight-bold text-center">
                Upload Picture
              </h6>
            </div>
            
            <h5 className="text-white font-weight-bold mt-3">Personal Info</h5>
            <div className="row">
              <div className="col-4">
                <TextInput placeHolder="First Name" label="First Name" />
              </div>
              <div className="col-4">
                <TextInput placeHolder="Middle Name" label="Middle Name" />
              </div>
              <div className="col-4">
                <TextInput placeHolder="Last Name" label="Last Name" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <TextInput placeHolder="Father Name" label="Father Name" />
              </div>
              <div className="col-4">
                <TextInput placeHolder="Gender" label="Gender" />
              </div>
              <div className="col-4">
                <TextInput placeHolder="Age" label="Age" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <TextInput placeHolder="Email Address" label="Email Address" />
              </div>
              <div className="col-4">
                <TextInput placeHolder="CNIC Number" label="CNIC Number" />
              </div>
              <div className="col-4">
                <TextInput placeHolder="Mobile Number" label="Mobile Number" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <TextInput
                  placeHolder="Landline Number"
                  label="Landline Number"
                />
              </div>
              <div className="col-4">
                <TextInput placeHolder="Complexion" label="Complexion" />
              </div>
              <div className="col-4">
                <TextInput
                  placeHolder="Physical Features"
                  label="Physical Features"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <TextInput placeHolder="Height" label="Height" />
              </div>
              <div className="col-4">
                <TextInput
                  placeHolder="Family members"
                  label="Family members"
                />
              </div>
              <div className="col-4">
                <TextInput placeHolder="Education" label="Education" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <TextInput placeHolder="Profession" label="Profession" />
              </div>
              <div className="col-4">
                <TextInput
                  placeHolder="Monthly Income"
                  label="Monthly Income"
                />
              </div>
              <div className="col-4">
                <TextInput placeHolder="Religion" label="Religion" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <TextInput placeHolder="Religion Sect" label="Religion Sect" />
              </div>
              <div className="col-4">
                <TextInput placeHolder="Cast" label="Cast" />
              </div>
            </div>

            <h5 className="text-white font-weight-bold mt-5">Location</h5>
            <div className="row">
              <div className="col-4">
                <TextInput placeHolder="Country" label="Country" />
              </div>
              <div className="col-4">
                <TextInput
                  placeHolder="State/Provience"
                  label="State/Provience"
                />
              </div>
              <div className="col-4">
                <TextInput placeHolder="City" label="City" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <TextInput placeHolder="Zip/Postal Code" label="Zip/Postal Code" />
              </div>
              <div className="col-4">
                <TextInput
                  placeHolder="Street Address"
                  label="Street Address"
                />
              </div>
            </div>

            <h5 className="text-white font-weight-bold mt-5">Partner Requirments</h5>
            <div className="row">
              <div className="col-4">
                <TextInput placeHolder="Looking For" label="Looking For" />
              </div>
              <div className="col-4">
                <TextInput
                  placeHolder="Martial Status"
                  label="Martial Status"
                />
              </div>
              <div className="col-4">
                <TextInput placeHolder="Age" label="Age" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <TextInput placeHolder="Religion" label="Religion" />
              </div>
              <div className="col-4">
                <TextInput
                  placeHolder="Religious Sect"
                  label="Religious Sect"
                />
              </div>
              <div className="col-4">
                <TextInput
                  placeHolder="Caste"
                  label="Caste"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <TextInput placeHolder="Academic Qualification" label="Academic Qualification" />
              </div>
              <div className="col-4">
                <TextInput
                  placeHolder="Occupation"
                  label="Occupation"
                />
              </div>
              <div className="col-4">
                <TextInput
                  placeHolder="Complexion"
                  label="Complexion"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <TextInput placeHolder="Physical Features" label="Physical Features" />
              </div>
              <div className="col-4">
                <TextInput
                  placeHolder="Height"
                  label="Height"
                />
              </div>
              <div className="col-4">
                <TextInput
                  placeHolder="Family Members"
                  label="Family Members"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <TextInput placeHolder="Country" label="Country" />
              </div>
              <div className="col-4">
                <TextInput
                  placeHolder="Province"
                  label="Province"
                />
              </div>
              <div className="col-4">
                <TextInput
                  placeHolder="City"
                  label="City"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
              <label className="TextInputLabel">Special Remarks</label>
                <textarea className="form-control TextInput rounded" placeholder="Special Remarks"/>
              </div>
              
             
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default UserInfo;
