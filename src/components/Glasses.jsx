// src/pages/Accessories.jsx
import React from "react";
import "../assets/css/style.css";
import img1 from "../assets/images/glass1 (1).jpg"
import img2 from "../assets/images/glass1 (2).jpg"
import img3 from "../assets/images/glass1 (3).jpg"

const accessoriesList = [
  {
    id: 1,
    name: "Glasses",
    price: 15.99,
    image: img1,
  },
  {
    id: 2,
    name: "Gucci Glasses",
    price: 45.0,
    image: img2,
  },
  {
    id: 3,
    name: "Glasses",
    price: 99.99,
    image: img3,
  },
];

const Accessories = () => {
  return (
    <div className="accessories-section">
      <h1 style={{ fontSize: 40, fontWeight: 600 }}>Sunglasses</h1>
      <p style={{ fontSize: 20, marginBottom: "2rem" }}>
        Explore our latest collection of fashion Sunglasses.
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
