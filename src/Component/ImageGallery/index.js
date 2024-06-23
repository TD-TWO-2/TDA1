import React from "react";
import './ImageGallery.css'
import Img from "../../Images/event.jpg";
import Img1 from "../../Images/gallery1.png";
import Img2 from "../../Images/gallery2.png";
import Img3 from "../../Images/gallery3.png";
import Img4 from "../../Images/gallery4.png";
import Img5 from "../../Images/gallery5.png";
import Img6 from "../../Images/gallery6.png";
const ImageGallery = () => {
    let images  = [
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
    <div className="gallery">
    {images.map((image, index) => (
      <div key={index} className={`image-container ${image.tall ? 'tall' : ''}`}>
        <img className='img-gallery' src={image.src} alt={`Gallery Image ${index + 1}`} />
      </div>
    ))}
  </div>
    // <div class="gallery">
    //   <div class="image-container">
    //     <img className='img-gallery' src={Img} />{" "}
    //   </div>
    //   <div class="image-container">
    //     <img className='img-gallery' src={Img1}  />{" "}
    //   </div>
    //   <div class="image-container tall">
    //     <img className='img-gallery' src={Img2}  />{" "}
    //   </div>
    //   <div class="image-container">
    //     <img className='img-gallery' src={Img3}  />{" "}
    //   </div>
    //   <div class="image-container">
    //     <img className='img-gallery' src={Img4}  />{" "}
    //   </div>
    //   <div class="image-container tall">
    //     <img className='img-gallery' src={Img5}  />{" "}
    //   </div>
    //   <div class="image-container">
    //     <img className='img-gallery' src={Img6}  />{" "}
    //   </div>
    //   <div class="image-container">
    //     <img className='img-gallery' src={Img1}  />{" "}
    //   </div>
    //   <div class="image-container">
    //     <img className='img-gallery' src={Img3}  />{" "}
    //   </div>
    //   <div class="image-container">
    //     <img className='img-gallery' src={Img5}  />
    //   </div>
    //   <div class="image-container tall">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    //   <div class="image-container tall">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    //   <div class="image-container">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    //   <div class="image-container">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    //   <div class="image-container tall">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    //   <div class="image-container tall">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    //   <div class="grid-item">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    //   <div class="image-container tall">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    //   <div class="image-container tall">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    //   <div class="image-container tall">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    //   <div class="image-container">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    //   <div class="image-container tall">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    //   <div class="image-container">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    //   <div class="image-container">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    //   <div class="image-container">
    //     <img src="https://picsum.photos/id/14/200/100" />
    //   </div>
    // </div>
  );
};

export default ImageGallery;
