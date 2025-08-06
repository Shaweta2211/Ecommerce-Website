// src/pages/Accessories.jsx
import React from "react";
import "../assets/css/style.css";
import img1 from "../assets/images/purse.jpeg"
import img2 from "../assets/images/purse1.jpeg"
import img3 from "../assets/images/purse2.jpeg"

const accessoriesList = [
  {
    id: 1,
    name: "Classic Handbag",
    price: 15.99,
    image: img1,
  },
  {
    id: 2,
    name: "Bag",
    price: 45.0,
    image: img2,
  },
  {
    id: 3,
    name: "Leather Bag",
    price: 99.99,
    image: img3,
  },
];

const Accessories = () => {
  return (
    <div className="accessories-section">
      <h1 style={{ fontSize: 40, fontWeight: 600 }}>Bags</h1>
      <p style={{ fontSize: 20, marginBottom: "2rem" }}>
        Explore our latest collection of fashion Bags.
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
