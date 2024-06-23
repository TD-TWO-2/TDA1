import React from "react";
import './MakeYourPlan.css';
import contactFormImg from "../../../Images/contact-form.png";
import avatarImg from "../../../Images/avatar.png";
import speechBubbleImg from "../../../Images/speech-bubble.png";
import marriageAmicoImg from "../../../Images/Marriage-amico.png";

const MakeYourPlan = () => {
  return (
    <div className="container">
      <div className="row pt-5 pb-5">
        <div className="col-12 col-lg-6 pt-5 d-flex flex-column justify-content-center">
          <h2 className="poppins-semibold">Make your Plan with us</h2>
          <span className="poppins-light pt-2">
            We will help you to success your dream wedding plan. If you have any plan feel free to ask us we will try to do our best to make your all the moment memorable.
          </span>
          <div>
            <div className="d-flex flex-row mt-4" style={{ gap: 15 }}>
              <div>
                <img
                  src={contactFormImg}
                  alt="Contact Form"
                  className="icon-style"
                />
              </div>
              <div>
                <h4 className="poppins-semibold">Registration & Verification</h4>
                <span className="poppins-light pt-2" style={{ fontSize: 14 }}>
                  Clicking the registration and verification button will take you to our page, where you'll need to provide the required details about yourself and your ideal partner.
                </span>
              </div>
            </div>
            <div className="d-flex flex-row mt-4" style={{ gap: 15 }}>
              <div>
                <img
                  src={avatarImg}
                  alt="Avatar"
                  className="icon-style"
                />
              </div>
              <div>
                <h4 className="poppins-semibold">Creating your profile</h4>
                <span className="poppins-light pt-2" style={{ fontSize: 14 }}>
                  Complete your profile by filling the required fields So that we can match and provide the best possible match for you.
                </span>
              </div>
            </div>
            <div className="d-flex flex-row mt-4" style={{ gap: 15 }}>
              <div>
                <img
                  src={speechBubbleImg}
                  alt="Speech Bubble"
                  className="icon-style"
                />
              </div>
              <div>
                <h4 className="poppins-semibold">Communicating directly with parents</h4>
                <span className="poppins-light pt-2" style={{ fontSize: 14 }}>
                  Once you're registered with us you will be able to access our database as per your preference, You will be able to directly contact the parents of your preferred partner.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center mt-3">
          <img
            src={marriageAmicoImg}
            alt="Marriage Amico"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default MakeYourPlan;
