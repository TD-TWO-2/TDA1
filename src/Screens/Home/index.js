import React, { useEffect, useState } from "react";
import NavBar from "../../Component/NavBar";
import whyazjaaw from "../../Images/whyazwaaj.png";
import bg from "../../Images/bg.png";
import ReactCardSlider from "react-card-slider-component";
import "./Home.css";
import FeaturedProfiles from "./FeaturedProfiles";
import SuccessStories from "./SuccessStories";
import Testimonials from "./Testimonials";
import Footer from "../../Component/Footer";
import OurBlogs from "../OurBlogs";
import DateDisplay from "../../Component/DateDisplay";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { Gallery } from "react-grid-gallery";
import ImageGallery from "../../Component/ImageGallery";
import MakeYourPlan from "./MakeYourPlan";
import TextInput from "../../Component/TextInput";
import TextArea from "../../Component/TextArea";
import Img from "../../Images/event.jpg";
import Img1 from "../../Images/gallery1.png";
import Img2 from "../../Images/gallery2.png";
import Img3 from "../../Images/gallery3.png";
import Img4 from "../../Images/gallery4.png";
import Img5 from "../../Images/gallery5.png";
import Img6 from "../../Images/gallery6.png";
const Home = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      image: require("../../Images/bannerbg.png"),
      heading: "Find Your AZWAAJ",
      subText:
        "We are committed to assisting individuals, guardians and parents in finding the ideal match for their loved Ones.",
    },
    {
      image: require("../../Images/bannerbg2.png"),
      heading: "Why should we get Married?",
      subText:
        "Marriage symbolizes the union and partnership between two individuals, both spiritually and socially. It is a commitment to share life's journey together, facing challenges and celebrating successes as a team.",
    },
    {
      image: require("../../Images/bannerbg3.png"),
      heading: "Benifits of Marriage",
      subText:
        "Marriage is valued across different religious traditions for its role in promoting love, commitment, family life, and societal harmony. While specific beliefs and practices may vary, the institution of marriage is universally recognized as a fundamental aspect of human society and civilization. ",
    },
    {
      image: require("../../Images/bannerbg2.png"),
      heading: "How religion or culture views marriage?",
      subText:
        "Marriage is universally valued as a sacred bond that fosters companionship, family stability, and spiritual growth across diverse religions and cultures.",
    },

    // {
    //   image: require("../../Images/bannerbg2.png"),
    //   heading: "Our Mission",
    //   subText:
    //     "Our mission is to offer a unique matrimonial service that helps families find suitable matches for their sons and daughters, while upholding Islamic principles. Rather than treating the individuals as mere commodities, we prioritize preserving their dignity. The fees we charge are modest, solely to sustain the operations of this website.",
    // },
    // {
    //   image: require("../../Images/bannerbg2.png"),
    //   heading: "Our Quotes",
    //   subText:
    //     "a website that stands apart from the rest, dedicated to making a meaningful difference for concerns  seeking a suitable match for their Ward.",
    // },
    // {
    //   image: require("../../Images/bannerbg3.png"),
    //   heading: "Our Blogs",
    //   subText: "",
    // },
  ];
  const personalizedMatching = [
    {
      image: require("../../Images/registration.png"),
      heading: "Registration & Verification",
      subText:
        "Clicking the registration and verification button will take you to our page, where you'll need to provide the required details about yourself and your ideal partner.",
    },
    {
      image: require("../../Images/profile.png"),
      heading: "Creating your profile",
      subText:
        "Complete your profile by filling the required fieldsSo that we can match and provide  the best possible match for you",
    },
    {
      image: require("../../Images/communicarion.png"),
      heading: "Communicating directly with parents",
      subText:
        "Once you're registered with us you will be able to access our database as per your preference, You will be able to directly contact the parents of your preferred partner.",
    },
  ];

  const mission = [
    // {
    //   image: require("../../Images/registration.png"),
    //   heading: "Why Azwaaj",
    //   subText:
    //     "We in azwaaj are committed on following the guidelines accordingto islam, which strictly prohibits parading the intended bride or groom as showpieces on display which is the current trend. we sincerely believe in guarding the selfrespect of the individual.",
    // },
    {
      image: require("../../Images/registration.png"),
      heading: "Mission",
      subText:
        "Our Mission Is to help parents in finding the best possible match for their children and fulfilling one of the most important responsibility given by The Lord.",
    },
    {
      image: require("../../Images/profile.png"),
      heading: "Our Vision",
      subText:
        "Our Vision is to provide a platform were parents can look for the best match for their children without the considerable charges incurred by them on other Matrimonial Websites and give equal opportunity to all irrespective of their financial status.",
    },
  ];
  // const goToNextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "This is a title",
      description: "This is a description",
    },
    {
      image: "https://picsum.photos/600/500",
      title: "This is a second title",
      description: "This is a second description",
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title",
      description: "This is a third description",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  console.log("currentIndex", currentIndex);
  const cardsData = [
    {
      image: require("../../Images/photography.jpg"),
      title: "Photography",
      text: "To Innovate and Provide cutting edge solutions in ever changing work dynamics",
    },
    {
      image: require("../../Images/photography.jpg"),
      title: "Mandi",
      text: "To Innovate and Provide cutting edge solutions in ever changing work dynamics",
    },
    {
      image: require("../../Images/photography.jpg"),
      title: "Barrat",
      text: "To Innovate and Provide cutting edge solutions in ever changing work dynamics",
    },
    {
      image: require("../../Images/photography.jpg"),
      title: "Birthday Party",
      text: "To Innovate and Provide cutting edge solutions in ever changing work dynamics",
    },
    // {
    //   image: require("../../Images/photography.jpg"),
    //   title: "Family Function",
    //   text: "To Innovate and Provide cutting edge solutions in ever changing work dynamics",
    // },
    // {
    //   image: require("../../Images/photography.jpg"),
    //   title: "Valima",
    //   text: "To Innovate and Provide cutting edge solutions in ever changing work dynamics",
    // },
    // {
    //   image: require("../../Images/photography.jpg"),
    //   title: "Valima",
    //   text: "To Innovate and Provide cutting edge solutions in ever changing work dynamics",
    // },
    // {
    //   image: require("../../Images/photography.jpg"),
    //   title: "Valima",
    //   text: "To Innovate and Provide cutting edge solutions in ever changing work dynamics",
    // },
  ];
  const giftCardsData = [
    {
      image: require("../../Images/giftHamper.jpg"),
      title: "Birthday",
      price: "Rs. 900/-",
    },
    {
      image: require("../../Images/giftHamper.jpg"),
      title: "Birthday",
      price: "Rs. 900/-",
    },
    {
      image: require("../../Images/giftHamper.jpg"),
      title: "Birthday",
      price: "Rs. 900/-",
    },
    {
      image: require("../../Images/giftHamper.jpg"),
      title: "Birthday",
      price: "Rs. 900/-",
    },
  ];

  const imagess = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
    },
  ];

  let imagesss  = [
    {
      id: 0,
      src: Img,
    },
    {
      id: 1,
      src: Img1,
    },
    {
      id: 2,
      src: Img2,
      tall: true
    },
    {
      id: 3,
      src: Img3,
    },
    {
      id: 4,
      src: Img4,
    },
    {
      id: 5,
      src: Img5,
      tall: true
    },
    {
      id: 6,
      src: Img6,
    },
    {
      id: 7,
      src: Img1,
    },
    {
      id: 8,
      src: Img3,
    },
    {
      id: 9,
      src: Img5,
    },
  ];
  return (
    <>
      <NavBar />
      <main>
        <div
          className="bannerbg"
          style={{ backgroundImage: `url(${images[currentIndex].image})` }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            {/* text */}
            <DateDisplay />
            <h1 className="main-text text-white">
              {images[currentIndex].heading}
            </h1>
            <span className="sub-text text-white w-50 text-center">
              {images[currentIndex].subText}
            </span>
            {/* button */}
            {/* {currentIndex == 0 && ( */}
            <div className="d-flex flex-row" style={{ gap: "10px" }}>
              <Link to="/Register">
                <div className="d-flex justify-content-center mt-4 mr-2">
                  <button className="btns">Register</button>
                </div>
              </Link>
              <Link to="/Login">
                <div className="d-flex justify-content-center mt-4">
                  <button className="btns">Login</button>
                </div>
              </Link>
            </div>
            {/* )} */}
          </div>
        </div>
        <div style={{ backgroundColor: "#C5AC76", padding: 5 }}></div>
        <div className="whyazwaaj" style={{ backgroundImage: `url(${bg})` }}>
          <div className="container">
            <div className="row pt-5">
              <div className="col-6 pt-5 d-flex flex-column justify-content-center">
                <h2 className="poppins-semibold">Why Azwaaj ?</h2>
                <p className="poppins-medium  pt-3" style={{ fontSize: 18 }}>
                  We in Azwaaj are committed to following the guidelines
                  according to Islam, which strictly prohibits parading the
                  intended bride or groom as showpieces on display, which is the
                  current trend. We sincerely believe in guarding the
                  self-respect of the individual. Our mission is to help parents
                  in finding the best possible match for their children and
                  fulfilling one of the most important responsibilities given by
                  Almighty Allah.
                </p>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <img src={require("../../Images/whyazwaj.png")} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#C5AC76", padding: 5 }}></div>
        <div>
          <MakeYourPlan />
        </div>
        <div className="">
          <h2 className="poppins-semibold text-center my-4">
            We Can Plan Your Entire Event
          </h2>
          <div className="gridContainer d-flex">
            {cardsData.map((card, index) => (
              <div
                className="card cardBg border-0"
                key={index}
                style={{ width: "18rem" }}
              >
                <div className="card-body cardData">
                  <div className="p-2" />
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      width={350}
                      height={150}
                      style={{ borderRadius: 6 }}
                    />
                  </div>
                  <div className="p-2" />
                  <h5 className="poppins-semibold card-title text-center text-uppercase">
                    {card.title}
                  </h5>
                  <p
                    className="card-text text-center poppins-light mb-1"
                    style={{ fontSize: 14 }}
                  >
                    {card.text}
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn2">Let's Talk</button>
                </div>
                <div className="p-2" />
              </div>
            ))}
          </div>
          <p
            className="text-center text-primary mt-3"
            style={{ cursor: "pointer" }}
          >
            See More
          </p>
          <div className="p-5" />
        </div>

        {/* <div className="">
          <h2 className="poppins-semibold text-center mb-4">
            Send Gift To Love One
          </h2>
          <div className="gridContainer d-flex">
            {giftCardsData.map((card, index) => (
              <div
                className="card cardBg border-0"
                key={index}
                style={{ width: "18rem" }}
              >
                <div className="card-body cardData">
                  <div className="p-2" />
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      width={350}
                      height={150}
                      style={{ borderRadius: 6 }}
                    />
                  </div>
                  <div className="p-2" />
                  <h5 className="poppins-semibold card-title text-center text-uppercase">
                    {card.title}
                  </h5>
                  <p
                    className="card-text text-center poppins-bold mb-1"
                    style={{ fontSize: 14, color: "#BB4444" }}
                  >
                    {card.price}
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn2">Shop Now</button>
                </div>
                <div className="p-2" />
              </div>
            ))}
          </div>
          <p
            className="text-center text-primary mt-3"
            style={{ cursor: "pointer" }}
          >
            View All
          </p>
          <div className="p-5" />
        </div> */}

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <div className="row">
                <div className="col-6 mb-4">
                  <div className="countup-container d-flex flex-column align-items-center">
                    <CountUp start={0} end={5101} />
                    <p className="mb-1" style={{ fontSize: 14 }}>
                      Weddings
                    </p>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="countup-container d-flex flex-column align-items-center">
                    <CountUp start={0} end={400} />
                    <p className="mb-1" style={{ fontSize: 14 }}>
                    Cultural & Religious Events
                    </p>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="countup-container d-flex flex-column align-items-center">
                    <CountUp start={0} end={5001} />
                    <p className="mb-1" style={{ fontSize: 14 }}>
                    Personal Celebrations
                    </p>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="countup-container d-flex flex-column align-items-center">
                    <CountUp start={0} end={6002} />
                    <p className="mb-1" style={{ fontSize: 14 }}>
                      Corporate
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <img
                src={slides[currentIndex]?.image}
                className="rounded-circle"
                style={{ width: 80, height: 80 }}
                alt={slides[currentIndex]?.title}
              />
              <p className="mb-1 mt-4 poppins-semibold">
                {slides[currentIndex]?.title}
              </p>
              <p className="poppins-semibold">
                {slides[currentIndex]?.description}
              </p>
              <div className="d-flex justify-content-center mt-4">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor:
                        currentIndex === index ? "#BB4444" : "grey",
                      margin: "0 5px",
                      cursor: "pointer",
                    }}
                    onClick={() => setCurrentIndex(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-5"></div>
        </div>

        <div className="container pb-5">
          <h2 className="poppins-semibold text-center mb-5">
            Our Recent Activities
          </h2>
          <ImageGallery images={imagesss} />
        </div>

        <div className="container">
          <div className="row  pb-5">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center mt-3">
              <img
                src={require("../../Images/Team.png")}
                alt="Marriage Amico"
                className="img-fluid"
              />
            </div>

            <div className="col-12 col-lg-6 pt-5 d-flex flex-column justify-content-center">
              <h2 className="poppins-semibold mb-2">
                Do You have any Plan?
                <br />
                Let's talk with us.
              </h2>
              <div>
                <TextInput label="Name" placeHolder="Name" />
                <TextInput label="Email" placeHolder="Email" />
                <TextInput label="Phone Number" placeHolder="Phone Number" />
                <TextArea label="Message" placeHolder="Message" />
                <button className="btn2 mt-3">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
