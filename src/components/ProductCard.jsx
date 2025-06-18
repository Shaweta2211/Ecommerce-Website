

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NEWARIVALS } from "../data/newarivals";
import "../assets/css/style.css";

const Countdown = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(endTime));

  function getTimeLeft(end) {
    const total = Date.parse(end) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(endTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="timer">
      {`${timeLeft.days} d : ${timeLeft.hours} h : ${timeLeft.minutes} m : ${timeLeft.seconds} s`}
    </div>
  );
};

export const ProductCard = () => {
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    if (likedItems.length > 0) {
      console.log("You liked a product:", likedItems);
    }
  }, [likedItems]);

  return (
    <div className="product-section">
      <div className="section-header">
        <h1 style={{ fontWeight: 500, fontSize: 40 }}>New Arrivals</h1>
        <p style={{ fontSize: 20 }}>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
      </div>

      <div className="product-grid">
        {NEWARIVALS.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-image-wrapper">
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} className="product-image" />
                <img src={item.hoverimage} alt={item.name} className="product-hover-image" />
              </Link>
              {item.hasTimer && <Countdown endTime={item.endTime} />}

              <div className="product-actions">
                <span onClick={() => toggleLike(item.id)}>
                  <i
                    className={`fa-${likedItems.includes(item.id) ? "solid" : "regular"} fa-heart`}
                    style={{ color: likedItems.includes(item.id) ? "red" : "#333" }}
                  ></i>
                </span>
                <span>
                  <i className="fa-solid fa-expand"></i>
                </span>
                <span>
                  <i className="fa-solid fa-eye"></i>
                </span>
              </div>

              <div className="size-overlay">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
            </div>

            <div className="product-info">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="read-more-container">
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};



