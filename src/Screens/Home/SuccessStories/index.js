import React from "react";
import "./SuccessStories.css";
import successstoriesbg from "../../../Images/successstoriesbg.png";
import ReactCardSlider from 'react-card-slider-component';
const SuccessStories = () => {
  const slides = [
    {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",},
    {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",},
    {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",},
    {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",},
    {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",},
    {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",},
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",},
]
  return (
    <div
      className="successStoriesBg"
      style={{ backgroundImage: `url(${successstoriesbg})` }}
    >
      <div className="pt-5 pb-3 d-flex justify-content-center">
        <img src={require("../../../Images/storieimg.png")} />
      </div>
      <div className="d-flex justify-content-center">
      <ReactCardSlider slides={slides}/>
      </div>
    </div>
  );
};

export default SuccessStories;
