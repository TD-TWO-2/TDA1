import React from "react";
import TextInput from "../../Component/TextInput";
import TextArea from "../../Component/TextArea";
import Button from "../../Component/Button";
import NavBar from "../../Component/NavBar";
const Contact = () => {
  return (
    <div className="container-fluied">
      <div className="row">
        <div className="col-8">
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ height: "100vh" ,width:'100%'}}
          >
            {/* <img src={require("../../Images/azwgold.png")} /> */}
            <div className="m-5 p-3" />
            <div className="m-1" />
            <div style={{width:'60%'}}>
            <div style={{display:'flex',alignSelf:'start',flexDirection:"column"}}>
            <h4 className="poppins-medium text-left" style={{textAlign:"left"}}>Get in Touch</h4>
            <p className="poppins-regular text-left" style={{textAlign:"left",fontSize:12}}>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
            </div>
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
        <div className="col-4">
          <div className="d-flex align-items-center" style={{height:'100%', position:'relative',right:100, top:40}}>
          <img src={require('../../Images/Facetoface.png')} style={{width:350,height:350}}/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
