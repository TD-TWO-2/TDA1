import React from "react";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import ImageGallery from "../../Component/ImageGallery";
import Img from "../../Images/event.jpg";
import Img1 from "../../Images/gallery1.png";
import Img2 from "../../Images/gallery2.png";
import Img3 from "../../Images/gallery3.png";
import Img4 from "../../Images/gallery4.png";
import Img5 from "../../Images/gallery5.png";
import Img6 from "../../Images/gallery6.png";
import Img7 from "../../Images/register-bg.png";
import Img8 from "../../Images/loginbg.png";
const Aboutus = () => {
    let images  = [
        {
          id: 0,
          src: Img,
        },
        {
          id: 1,
          src: Img7,
        },
        {
          id: 2,
          src: Img2,
        },
        {
          id: 3,
          src: Img8,
        },
        {
          id: 4,
          src: Img4,
        },
        {
          id: 5,
          src: Img5,
        },
        {
          id: 6,
          src: Img6,
        },
        {
          id: 7,
          src: Img7,
        },
        {
          id: 8,
          src: Img8,
        },
        {
          id: 9,
          src: Img1,
        },
        {
          id: 9,
          src: Img7,
        },
        {
          id: 9,
          src: Img2,
        },
      ];
  return (
    <div className="container-fluied">
      <NavBar />
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="m-5" />
          <div className="m-2" />
          <div className="col-6">
            <h4>Hi There!</h4>
            <h4>This is Azwaaj</h4>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
          </div>
          <div className="col-6">
            <img
              src={require("../../Images/flower.png")}
              style={{ width: "95%" }}
            />
          </div>
        </div>
            <div className="m-5" />
        <div className="row">
            <h2 className="text-center">Heading</h2>
            <p className="text-center">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
            <ImageGallery images={images}/>
        </div>
        <div className="m-5" />
       
      </div>
      <div className="py-5" style={{background:'#edded3'}}>
      <div className="container">
        <h2 className="text-center">Are you ready to plan <br></br>a special day</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n</p>
        <div className="d-flex justify-content-center align-items-center">
        <button className="btn2 mt-3">Submit</button>
        </div>
      </div>
      </div>
      <div className="m-5"/>
      <Footer/>
    </div>
  );
};

export default Aboutus;
