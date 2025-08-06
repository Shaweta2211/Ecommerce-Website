// src/pages/Accessories.jsx
import React from "react";
import "../assets/css/style.css";
import shoe1 from "../assets/images/shoe.jpeg"
import shoe2 from "../assets/images/shoe1.jpeg"
import shoe3 from "../assets/images/shoe2.jpeg"

const accessoriesList = [
  {
    id: 1,
    name: "Nike Shoes",
    price: 25.99,
    image: shoe1,
  },
  {
    id: 2,
    name: "SoleVibe Shoes",
    price: 45.0,
    image: shoe2,
  },
  {
    id: 3,
    name: "Kikstep shoes",
    price: 99.99,
    image: shoe3,
  },
];

const Accessories = () => {
  return (
    <div className="accessories-section">
      <h1 style={{ fontSize: 40, fontWeight: 600 }}>Sneakers</h1>
      <p style={{ fontSize: 20, marginBottom: "2rem" }}>
        Explore our latest collection of fashion Sneakers.
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
