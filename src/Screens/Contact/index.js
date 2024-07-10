import React from "react";
import TextInput from "../../Component/TextInput";
import TextArea from "../../Component/TextArea";
import Button from "../../Component/Button";
import NavBar from "../../Component/NavBar";
import GoogleMapReact from 'google-map-react';
const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div className="container-fluied">
    <NavBar/>
      <div className="row">
        <div className="col-3">
          <img
            src="https://picsum.photos/700/600"
            style={{ height: "100vh", width: "100%" }}
          />
        </div>
        <div className="col-9">
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ height: "100vh" ,width:'100%'}}
          >
            {/* <img src={require("../../Images/azwgold.png")} /> */}
            <div className="m-5" />
            {/* <h3 className="poppins-medium">Drop Us a Line</h3> */}
            <h4 className="poppins-medium">Contact us</h4>
            <div className="m-1" />
            <div style={{width:'60%'}}>
            <TextInput
              placeHolder="Enter Name"
              label="Enter Name"
              backgroundColor={"#EDF1FC"}
            />
            <TextInput
              placeHolder="Phone Number"
              label="Phone Number"
              backgroundColor={"#EDF1FC"}
            />

            <TextInput
              placeHolder="Enter Email"
              label="Enter Email"
              backgroundColor={"#EDF1FC"}
            />
            <TextInput
              placeHolder="Enter Subject"
              label="Enter Subject"
              backgroundColor={"#EDF1FC"}
            />
            <TextArea
              placeHolder="Enter Message"
              label="Message"
              backgroundColor={"#EDF1FC"}
            />
            <div className="m-3" />
            <Button btnTitle={"Submit"} />
            <div className="m-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
    </div>
  );
};

export default Contact;
