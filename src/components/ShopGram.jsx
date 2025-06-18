import React from "react";
import "../assets/css/style.css";

// Import images
import glasses from "../assets/images/googles1.jpg";
import bag from "../assets/images/bag1.jpg";
import cap from "../assets/images/cap.jpg";
import shoes from "../assets/images/shoes1.jpg";
import sneakers from "../assets/images/sneakers1.jpg";

export function ShopGram() {
  // Array of images
  const images = [
    { src: glasses, alt: "Glasses" },
    { src: bag, alt: "Bag" },
    { src: cap, alt: "Cap" },
    { src: shoes, alt: "Shoes" },
    { src: sneakers, alt: "Sneakers" },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-2" style={{ fontWeight: 500, fontSize: 40 }}>
        Shop Gram
      </h2>
      <h4 className="text-center mb-5" style={{ fontSize: 15 }}>
        Inspire and let yourself be inspired, from one unique fashion to another
      </h4>      
      <div className="row d-flex justify-content-between">
        {images.map((image, index) => (
          <div key={index} className="col p-0">
            <div className="shopping-items image-container">
              <a href="">
                <div className="image-wrapper">
                  <img src={image.src} alt={image.alt} className="img-fluid image-hover" />
                  <i className="gallery-icon fas fa-image"></i>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
