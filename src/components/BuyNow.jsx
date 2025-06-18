import React, { useState } from "react";
import "../assets/css/style.css";
import buyMaroon from "../assets/images/crop2.jpeg";  // Maroon image
import buyBlue from "../assets/images/crop3.jpeg";    // Blue image
import buyPink from "../assets/images/crop1.webp";    // Pink image

export default function BuyNow() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("blue");

  const colorImages = {
    blue: buyBlue,
    maroon: buyMaroon,
    pink: buyPink,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted!\nSize: ${selectedSize}\nQty: ${quantity}\nColor: ${selectedColor}`);
  };

  const inrPricePerItem = 1299;
  const inrTotal = inrPricePerItem * quantity;
  const usdTotal = (inrTotal / 83).toFixed(2);

  const colors = [
    { name: "blue", hex: "#1565C0" },
    { name: "maroon", hex: "#800000" },
    { name: "pink", hex: "#E91E63" },
  ];

  return (
    <div className="container py-5">
      <h2 className="mb-5 text-center">Buy Now</h2>

      <div className="row">
        {/* Customer Form */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 p-4 shadow-sm">
            <h4 className="mb-3">Customer Details</h4>
            <form onSubmit={handleSubmit} className="d-flex flex-column h-100">
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input id="fullName" type="text" className="form-control" placeholder="Enter your full name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input id="email" type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Shipping Address</label>
                <textarea id="address" className="form-control" rows="3" placeholder="Enter full address"></textarea>
              </div>
              <div className="mt-auto">
                <button type="submit" className="btn btn-dark w-100">Proceed to Checkout</button>
              </div>
            </form>
          </div>
        </div>

        {/* Product Summary */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 p-4 shadow-sm">
            <h4 className="mb-3">Product Summary</h4>
            <div className="d-flex align-items-start mb-3">
              <img
                src={colorImages[selectedColor]}
                alt={`product-${selectedColor}`}
                className="me-3 rounded"
                style={{ width: "200px", height: "auto" }}
              />
              <div>
                <h6>Product Name</h6>

                {/* Size Selector */}
                <p className="mb-1">
                  Size:{" "}
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="form-select form-select-sm w-auto d-inline ms-2"
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </p>

                {/* Quantity Selector */}
                <p className="mb-1">
                  Qty:{" "}
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="form-control form-control-sm w-25 d-inline ms-2"
                  />
                </p>

                {/* Color Selector */}
                <p className="mb-1">Color:</p>
                <div className="d-flex gap-2 mb-2">
                  {colors.map(({ name, hex }) => (
                    <button
                      key={name}
                      type="button"
                      className={`rounded-circle border ${selectedColor === name ? "border-3" : "border-1"}`}
                      style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: hex,
                        outline: selectedColor === name ? "2px solid #000" : "none",
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedColor(name)}
                    />
                  ))}
                </div>

                {/* Price */}
                <p className="fw-bold">Total: ₹{inrTotal} / ${usdTotal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
