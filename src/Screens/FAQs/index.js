import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./FAQs.css";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionData = [
    {
      title: "Marriage Item #1",
      content: "Details about marriage traditions and customs.",
    },
    {
      title: "Marriage Item #2",
      content: "Legal aspects and requirements for marriage.",
    },
    {
      title: "Marriage Item #3",
      content: "Cultural significance of marriage ceremonies.",
    },
    {
      title: "Event Organizer #1",
      content: "Details about planning and organizing wedding events.",
    },
    {
      title: "Event Organizer #2",
      content: "Tips for choosing the perfect venue and decorations.",
    },
    {
      title: "Event Organizer #3",
      content: "Catering options and menu planning for weddings.",
    },
    {
      title: "Event Organizer #4",
      content: "Managing guest lists and RSVPs.",
    },
    {
      title: "Event Organizer #5",
      content: "Music and entertainment options for wedding events.",
    },
    {
      title: "Event Organizer #6",
      content: "Photography and videography tips for weddings.",
    },
    {
      title: "Event Organizer #7",
      content: "Post-wedding event planning and execution.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <NavBar />
      <div className="container">
      <div style={{ paddingTop: 150 }}></div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {accordionData.map((item, index) => (
          <div className="accordion-item mb-2 rounded" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button rounded ${
                  activeIndex === index ? "active" : "collapsed"
                }`}
                // type="button"
                onClick={() => handleAccordionClick(index)}
                aria-expanded={activeIndex === index ? "true" : "false"}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`flush-collapse${index}`}
              className={`accordion-collapse collapse ${
                activeIndex === index ? "show" : ""
              }`}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
      <div style={{height:30}}></div>
      <Footer />
    </div>
  );
};

export default FAQs;
