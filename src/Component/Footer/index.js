import React from "react";
import logo from '../../Images/azwaajlogo.png';
const Footer = () => {
  return (
    <div className="bg-black px-5 pt-5">
      <div className="row px-5 pt-5">
        <div className="col-3 d-flex justify-content-center">
          <ul className="list-unstyled text-white">
            <li class="pb-3">
              <strong>Quick Link</strong>
            </li>
            <li class="small pb-2 text-secondary">Home</li>
            <li class="small pb-2 text-secondary">Search</li>
            <li class="small pb-2 text-secondary">Contact Us</li>
            <li class="small pb-2 text-secondary">About Us</li>
          </ul>
        </div>
        <div className="col-3 d-flex justify-content-center">
        <ul className="list-unstyled text-white">
            <li class="pb-3">
              <strong>Information</strong>
            </li>
            <li class="small pb-2 text-secondary">FAQ</li>
            <li class="small pb-2 text-secondary">Blog</li>
            <li class="small pb-2 text-secondary">Support</li>
          </ul>
        </div>
        <div className="col-3 d-flex justify-content-center">
        <ul className="list-unstyled text-white">
            <li class="pb-3">
              <strong>Company</strong>
            </li>
            <li class="small pb-2 text-secondary">About us</li>
            <li class="small pb-2 text-secondary">Carrers</li>
            <li class="small pb-2 text-secondary">Contact Us</li>
          </ul>
        </div>
        <div className="col-3 px-4 py-4" style={{backgroundColor:"#1a1a1a", position:'relative',top:-25}}>
        <span className="text-white"><strong>Subscribe</strong></span>
      
                <div className="my-2">
                  <input
                    type="text"
                    id="footerEmail"
                    placeholder="Enter Email Address"
                    style={{
                      background: "#F8FAFC",
                      fontSize: "14px",
                    }}
                  />
                  <button id='footerEmailBtn'><i class="fa fa-long-arrow-right"></i></button>
                </div>
                  <span className="text-secondary small mt-2">
                  Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.
                  </span>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
      <div class="border-top border-secondary d-flex justify-content-between align-items-center" style={{width:'90%'}}>
      <img src={logo} alt="azwaaj Logo" />
      <div>

      <ul className="list-unstyled d-flex text-white">
            <li class="small text-white me-3">Home</li>
            <li class="small text-white me-3">Search</li>
            <li class="small text-white me-3">Contact Us</li>
          </ul>
      </div>
                    <div>

                    <ul className="list-unstyled d-flex text-white">
            <li class="small text-white me-3"><i class="fa fa-linkedin" aria-hidden="true"></i></li>
            <li class="small text-white me-3"><i class="fa fa-facebook" aria-hidden="true"></i></li>
            <li class="small text-white me-3"><i class="fa fa-twitter" aria-hidden="true"></i></li>
          </ul>
                    </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
