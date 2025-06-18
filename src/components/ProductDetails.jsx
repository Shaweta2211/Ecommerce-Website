


// import React from "react";
// import { useParams } from "react-router-dom";
// import { NEWARIVALS } from "../data/newarivals";
// import "../assets/css/style.css";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = NEWARIVALS.find((item) => item.id === parseInt(id));

//   if (!product) return <p>Product not found</p>;

//   return (
//     <div className="product-detail-container">
//       <img src={product.image} alt={product.name} className="main-product-image" />
//       <h1>{product.name}</h1>
//       <p>Price: ${product.price.toFixed(2)}</p>
//       <p>{product.description || "This is a high-quality product you’ll love."}</p>
//     </div>
//   );
// }



import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NEWARIVALS } from "../data/newarivals";
import "../assets/css/style.css";

const sizes = ["S", "M", "L", "XL"];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = NEWARIVALS.find((item) => item.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Product not found</p>;

  const handleImageClick = () => {
    navigate("/shop");
  };

  return (
    <div className="product-detail-container">
      <div className="image-gallery">
        <div className="main-image">
          <img
            src={product.image}
            alt={product.name}
            className="zoom-image"
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <div className="product-info">
        <p className="breadcrumb">Home &gt; {product.name}</p>
        <h1 className="product-title">{product.name}</h1>

        <div className="badges">
          <p className="fast-selling">🔥 Selling fast! 66 people have this in their carts.</p>
          <p className="viewing-now">👀 People are viewing this right now</p>
        </div>

        <div className="price-section">
          <p className="price">
            <span className="current-price">${(product.price).toFixed(2)}</span>
            <span className="original-price">${(product.price * 1.65).toFixed(2)}</span>
            <span className="discount">39% OFF</span>
          </p>
        </div>

        <div className="size-options">
          <p>Size:</p>
          <div className="size-buttons">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-selector">
          <p>Quantity:</p>
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <div className="action-buttons">
          <button className="add-to-cart">
            🛒 Add to cart ${(product.price * quantity).toFixed(2)}
          </button>
          <button className="paypal-btn">Buy with PayPal</button>
        </div>

        <div className="extras">
          <span>❓ Ask a question</span>
          <span>🚚 Delivery & Return</span>
          <span>🔗 Share</span>
        </div>

        <div className="delivery-info">
          <div>
            <h4>Estimated delivery</h4>
            <p>12–26 days (International), 3–6 days (US)</p>
          </div>
          <div>
            <h4>Return Policy</h4>
            <p>Return within 30 days of purchase. Taxes are non-refundable.</p>
          </div>
        </div>

        <div className="payment-icons">
          <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" />
          <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="mastercard" />
          <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="paypal" />
          <img src="https://img.icons8.com/color/48/000000/amex.png" alt="amex" />
        </div>
      </div>
    </div>
  );
}
