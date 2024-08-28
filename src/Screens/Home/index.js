import React, { useEffect, useState } from "react";
import NavBar from "../../Component/NavBar";
import "./Home.css";
import Footer from "../../Component/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  const SuccessStories = [
    {
      image: require("../../Images/ss1.png"),
      title: "Ali khan & Fizza Baig",
      text: "Please add your content here.Keep it short and simple. And smile :) ",
    },
    {
      image: require("../../Images/ss2.png"),
      title: "Moeen Uddin & Kiran Khan",
      text: "Please add your content here.Keep it short and simple. And smile :) ",
    },
    {
      image: require("../../Images/ss3.png"),
      title: "Sumair & Sara",
      text: "Please add your content here.Keep it short and simple. And smile :) ",
    },
  ];
  return (
    <>
      <NavBar />
      <main>
        <img src={require("../../Images/mainbg.png")} />
        <div className="container my-5">
          <h1
            className="pacifico-regular text-center"
            style={{ color: "#A14049" }}
          >
            Welcome to Azwaaj
          </h1>
          <p
            className="poppins-medium text-center mt-4"
            style={{ color: "#A14049" }}
          >
            a website that stands apart from the rest,<br></br>dedicated to
            making a meaningful difference for <br></br>concerns seeking a
            suitable match for their Ward.
          </p>
        </div>
        <div className="whyazwaajbg">
          <div className="container my-5">
            <h4
              className="pacifico-regular text-center text-white mb-5"
              style={{ fontSize: 64 }}
            >
              Welcome to Azwaaj
            </h4>
            <p className="poppins-medium text-center mt-4 text-white">
              Our mission is to offer a unique matrimonial service that helps
              families <br></br>find suitable matches for their sons and
              daughters, while upholding <br></br>Islamic principles. Rather
              than treating the individuals as mere commodities,<br></br>we
              prioritize preserving their dignity. The fees we charge are
              modest, solely <br></br>to sustain the operations of this website.
            </p>
            <p className="poppins-medium text-center mt-4 text-white">
              We sincerely believe in guarding the <br></br>self-respect of
              theindividual. Our mission is to help parents in finding <br></br>
              the best possible match for their children and fulfilling{" "}
              <br></br>one of the most important responsibilities given by
              <br></br>Almighty Allah.
            </p>
          </div>
        </div>
        <div className="m-5" />
        <div style={{ backgroundColor: "#FFE1E1" }}>
          <div className="row p-5">
            <div className="col-md-6">
              <h1 className="pacifico-regular" style={{ color: "#A14049" }}>
                Our Mission
              </h1>
              <p className="poppins-medium mt-4" style={{ color: "#A14049" }}>
                Our mission is to offer a unique matrimonial service that helps
                families<br></br>find suitable matches for their sons and
                daughters, while upholding<br></br>Islamic principles. Rather
                than treating the individuals as mere commodities,<br></br>we
                prioritize preserving their dignity. The fees we charge are
                modest, solelyto sustain the operations of this website.
              </p>
            </div>
            <div
              className="col-md-6 d-flex align-items-center"
              style={{ gap: 10 }}
            >
              <img
                src={require("../../Images/ourmission.png")}
                width={220}
                height={220}
              />
              <img
                src={require("../../Images/ourmission2.png")}
                width={220}
                height={220}
              />
              <img
                src={require("../../Images/ourmission3.png")}
                width={220}
                height={220}
              />
            </div>
          </div>
        </div>
        <div className="m-5" />
        <h3 className="poppins-medium text-center" style={{ color: "#A14049" }}>
          SUCCESS STORIES
        </h3>
        <div className="m-3" />
        <div className="gridContainer d-flex">
          {SuccessStories.map((card, index) => (
            <div
              className=" cardBg border-0"
              key={index}
              style={{ width: "15rem" }}
            >
              <div className="card-body cardData">
                <div className="p-2" />
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    width={250}
                    height={250}
                    style={{ borderRadius: 6 }}
                  />
                </div>
                <div className="p-2" />
                <h6
                  style={{ color: "#A14049", fontSize: 16 }}
                  className="poppins-semibold card-title text-center text-uppercase"
                >
                  {card.title}
                </h6>
                <div className="m-2" />
                <p
                  className="card-text text-center poppins-light mb-1"
                  style={{ fontSize: 12 }}
                >
                  {card.text}
                </p>
              </div>

              <div className="p-2" />
            </div>
          ))}
        </div>
        <div className="m-5" />
        <div style={{ backgroundColor: "#FFE1E1" }}>
          <div className="container">
            <div className="p-2" />
            <h1
              className="poppins-medium text-center mt-5"
              style={{ color: "#A14049" }}
            >
              Souls Who Have Connected
            </h1>
            <div className="p-4" />

            <div className="d-flex align-items-center justify-content-around">
              <img
                src={require("../../Images/ourmission.png")}
                width={220}
                height={220}
                style={{ borderRadius: 100 }}
              />
              <img
                src={require("../../Images/ourmission2.png")}
                width={220}
                height={220}
                style={{ borderRadius: 100 }}
              />
              <img
                src={require("../../Images/ourmission3.png")}
                width={220}
                height={220}
                style={{ borderRadius: 100 }}
              />
            </div>
            <div className="m-5" />
            <div className="d-flex justify-content-center">
              <button className="btns">Read Testimonials</button>
            </div>

            <div className="p-5" />
          </div>
        </div>
        <div className="m-5" />

        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
              <div>
                <div className="d-flex flex-row mt-4" style={{ gap: 15 }}>
                  <div>
                    <h3
                      className="poppins-semibold "
                      style={{ color: "#A14049" }}
                    >
                      Registration & Verification
                    </h3>
                    <span
                      className="poppins-light pt-2"
                      style={{ fontSize: 12 }}
                    >
                      Clicking the registration and verification button will
                      take you to our page, where you'll need to provide the
                      required details about yourself and your ideal partner.
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-row mt-4" style={{ gap: 15 }}>
                  <div>
                    <h3
                      className="poppins-semibold"
                      style={{ color: "#A14049" }}
                    >
                      Creating your profile
                    </h3>
                    <span
                      className="poppins-light pt-2"
                      style={{ fontSize: 12 }}
                    >
                      Complete your profile by filling the required fields So
                      that we can match and provide the best possible match for
                      you.
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-row mt-4" style={{ gap: 15 }}>
                  <div>
                    <h3
                      className="poppins-semibold"
                      style={{ color: "#A14049" }}
                    >
                      Communicating directly with parents
                    </h3>
                    <span
                      className="poppins-light pt-2"
                      style={{ fontSize: 12 }}
                    >
                      Once you're registered with us you will be able to access
                      our database as per your preference, You will be able to
                      directly contact the parents of your preferred partner.
                    </span>
                  </div>
                </div>

                <div className="d-flex mt-4">
                  <Link to={'/Register'}>
                    <button className="btns">Register Now</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center mt-3">
              <img
                src={require("../../Images/verificationimage.png")}
                alt="Marriage Amico"
                className="img-fluid"
                width={450}
                height={450}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
