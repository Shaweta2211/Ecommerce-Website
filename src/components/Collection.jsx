import React from "react";
import "../assets/css/style.css";
import modernbag from "../assets/images/bags1.jpg"
import seasoncollection from "../assets/images/small-purse.jpg"
import shoes from "../assets/images/shoes.avif"

const products = [
  {
    id: 1,
    name: "Modern Backpack",
    price: "$199",
    image: modernbag,
    alt: "Modern Backpack",
  },
  {
    id: 2,
    name: "Season Collection",
    price: "$199",
    image: seasoncollection,
    alt: "Start From",
  },
  {
    id: 3,
    name: "Stradivarius Top Trainer",
    price: "$199",
    image: shoes,
    alt: "Start From",
  },
];

export function Collection() {
  return (
    <section className="collection">
      <div className="container">
        <div className="collection-items row">
          {products.map((product) => (
            <div key={product.id} className="collection-item col-4">
              <div className="image">
                <img
                  src={product.image}
                  alt={product.alt}
                />
              </div>
              <div className="collection-text">
                <h4>{product.name}</h4>
                <p>Start from {product.price}</p>
              </div>
              <div className="banner-btn">
                <a href="#" className="btn btn-primary">
                  Shop now <i className="fa-solid fa-arrow-trend-up"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
