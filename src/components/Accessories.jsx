// src/pages/Accessories.jsx
import React from "react";
import "../assets/css/style.css";
import earingImg from "../assets/images/earing.webp"
import watchImg from "../assets/images/watch.webp"
import ringImg from "../assets/images/ring.avif"

const accessoriesList = [
  {
    id: 1,
    name: "Earing",
    price: 25.99,
    image: earingImg,
  },
  {
    id: 2,
    name: "Ring",
    price: 45.0,
    image: ringImg,
  },
  {
    id: 3,
    name: "Wrist Watch",
    price: 99.99,
    image: watchImg,
  },
];

const Accessories = () => {
  return (
    <div className="accessories-section">
      <h1 style={{ fontSize: 40, fontWeight: 600 }}>Accessories</h1>
      <p style={{ fontSize: 20, marginBottom: "2rem" }}>
        Explore our latest collection of fashion accessories.
      </p>

      <div className="product-grid">
        {accessoriesList.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
