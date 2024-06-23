import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import testimonialsbg from "../../../Images/testimonialsbg.png";
const Testimonials = () => {
  const testimonialsData = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. Vitae eu accumsan ultrices neque blandit proin elit ac. In turpis felis urna et aliquet sed lacus.",
      author: "Ali Shoaib",
      role: "Groom",
    },
    // {
    //   text: "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. Vitae eu accumsan ultrices neque blandit proin elit ac. In turpis felis urna et aliquet sed lacus.",
    //   author: "Ali Shoaib",
    //   role: "Groom",
    // },
    // {
    //   text: "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. Vitae eu accumsan ultrices neque blandit proin elit ac. In turpis felis urna et aliquet sed lacus.",
    //   author: "Ali Shoaib",
    //   role: "Groom",
    // },
  ];
  const images = [
    {
      image: require("../../../Images/testimonialsbg.png"),
      groomImage:
        "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. Vitae eu accumsan ultrices neque blandit proin elit ac. In turpis felis urna et aliquet sed lacus.",
      author: "Ali Shoaib",
      role: "Groom",
    },
    {
      image: require("../../../Images/testimonialsbg.png"),
      groomImage:
        "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. Vitae eu accumsan ultrices neque blandit proin elit ac. In turpis felis urna et aliquet sed lacus.",
      author: "Hamza",
      role: "Groom",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000); // Change slide every 30 seconds
    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, [currentIndex]); // Re-run effect when currentIndex changes
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      <div className="mb-0 d-flex justify-content-center">
        <img
          src={require("../../../Images/testimonials.png")}
          className="my-4"
        />
      </div>

      <div className="carousel">
        <div
        key={currentIndex}
          className="hello"
          style={{ backgroundImage: `url(${images[currentIndex].image})` }}
        >
         
              <div className="testimonialTxt">
                <p className="text-white">{images[currentIndex].text}</p>
                <div className="d-flex justify-content-center">
                  <img src={require("../../../Images/stars.png")} />
                  <img
                    src={require("../../../Images/CommaVector.png")}
                    style={{ position: "relative", top: 50, right: 40 }}
                  />
                </div>
              </div>
              <div className="testimonialImg ">
                <div className="d-flex  justify-content-end">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src={images[currentIndex].groomImage}
                      className="rounded-circle bg-white p-3"
                      width={350}
                      height={350}
                    />
                    <span className="sub-text text-white font-weight-bold mt-3">
                      {images[currentIndex].author}
                    </span>
                    <span className="sub-text2 text-white font-weight-normal">
                      {images[currentIndex].role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
        
  
      </div>
    </>
  );
};

export default Testimonials;
