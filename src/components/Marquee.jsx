import React from "react";
import "../assets/css/style.css";


const marqueeItems = [
  "FREE SHIPPING AND RETURN",
  "NEW SEASONS, NEW STYLES: FASHION SALE YOU CAN'T RESET",
  "LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST"
];

export function Marquee() {
  // Repeat the items up to a maximum of 4 times
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {repeatedItems.map((item, index) => (
          <div key={index} className="marquee-text">
            <i className="fa-solid fa-caret-down"></i>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
