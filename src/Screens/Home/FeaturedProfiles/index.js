import React from "react";
import "./FeaturedProfiles.css";
import featuredProfileBg from "../../../Images/filter-bg.png";
const FeaturedProfiles = () => {
  const dummyData = [
    {
      name: "Saif Ali Siddiqui",
      age: 32,
      location: "Karachi, Pakistan",
      description: "Ahsan is a passionate and dedicated individual who is always eager to learn and grow. With a keen interest in technology and innovation, Ahsan is known for his problem-solving skills and creative thinking. He enjoys exploring new ideas and approaches, and is committed to making a positive impact in his community. In his free time, Ahsan loves to unwind by reading, traveling, and spending quality time with family and friends."
    },
    {
      name: "Saif Ali Siddiqui",
      age: 32,
      location: "Karachi, Pakistan",
      description: "Ahsan is a passionate and dedicated individual who is always eager to learn and grow. With a keen interest in technology and innovation, Ahsan is known for his problem-solving skills and creative thinking. He enjoys exploring new ideas and approaches, and is committed to making a positive impact in his community. In his free time, Ahsan loves to unwind by reading, traveling, and spending quality time with family and friends."
    },
    {
      name: "Saif Ali Siddiqui",
      age: 32,
      location: "Karachi, Pakistan",
      description: "Ahsan is a passionate and dedicated individual who is always eager to learn and grow. With a keen interest in technology and innovation, Ahsan is known for his problem-solving skills and creative thinking. He enjoys exploring new ideas and approaches, and is committed to making a positive impact in his community. In his free time, Ahsan loves to unwind by reading, traveling, and spending quality time with family and friends."
    },
    // Add more dummy data objects as needed
  ];
  return (
    <div
      className="featuredProfileBg d-flex flex-column"
      style={{ backgroundImage: `url(${featuredProfileBg})` }}
    >
      <div className="mt-5 mb-3">
        <img src={require("../../../Images/featuredProfileImg.png")} />
      </div>
      <div>
      {dummyData.map((person, index) => (
        <div key={index} className="d-flex flex-row bg-white p-3 mx-5 mt-3 rounded" style={{ gap: '20px' }}>
          <div>
            <img src={require("../../../Images/pp.png")} alt="profile" />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <h3 className="heading">{person.name}</h3>
            <span className="sub-text1">Age: {person.age}</span>
            <span className="sub-text1">Location: {person.location}</span>
            <p className="para-text">{person.description}</p>
            <button className="btns">Connect</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FeaturedProfiles;
