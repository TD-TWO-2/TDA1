import React from "react";
import "./Search.css";
import backimage from "../../Images/searchbg.png";
import { Link } from "react-router-dom";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import TextInput from "../../Component/TextInput";
const Search = () => {
  return (
    <div
    // className="loginbg" style={{ backgroundImage: `url(${backimage})` }}
    className="" style={{ backgroundColor:'#ebf0f4' }}>
      <NavBar />
      <div className="py-3"></div>
      <div className="logincontainer">
        <div className="loginform">
          <h3 className=" text-center pt-2">I'm looking for</h3>
          <div className="row">
            <div className="col-4">
              <TextInput placeHolder="Gender" label="Gender"  />
            </div>
            <div className="col-4">
              <TextInput
                placeHolder="Physical Features"
                label="Physical Features"/>
            </div>
            <div className="col-4">
              <TextInput placeHolder="Age(From)" label="Age(From)"/>
            </div>
          </div>
          <div className="row">
           
            <div className="col-4">
              <TextInput placeHolder="Age(To)" label="Age(To)"   />
            </div>
            <div className="col-4">
              <TextInput placeHolder="Profession" label="Profession"  />
            </div>
            <div className="col-4">
              <TextInput placeHolder="Cast" label="Cast"   />
            </div>
          </div>
        
          <div className="row">
            <div className="col-4">
              <TextInput placeHolder="Martial Status" label="Martial Status"   />
            </div>
            <div className="col-4">
              <TextInput
                placeHolder="Religious / Sect"
                label="Religious / Sect"
                 
              />
            </div>
          </div>

          <button className="form-control">Continue</button>
        </div>
      </div>
      <div className="py-3"></div>
      <Footer />
    </div>
  );
};

export default Search;
