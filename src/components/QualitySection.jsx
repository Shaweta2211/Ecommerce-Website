import React from "react";

import { FaLeaf, FaShapes, FaCompressArrowsAlt } from "react-icons/fa";

const QualitySection = () => {
  return (
    <div className="quality-section">
      <h2>Quality is our priority</h2>
      <p className="subtitle">
        Our talented stylists have put together outfits that are perfect for the season. <br />
        They’ve variety of ways to inspire your next fashion–forward look.
      </p>

      <div className="quality-cards">
        <div className="quality-card">
          <div className="icon-wrapper">
            <FaLeaf />
          </div>
          <h3>High-Quality Materials</h3>
          <p>
            Crafted with precision and excellence, our activewear is meticulously engineered using premium materials to ensure unmatched comfort and durability.
          </p>
        </div>

        <div className="quality-card">
          <div className="icon-wrapper">
            <FaShapes />
          </div>
          <h3>Laconic Design</h3>
          <p>
            Simplicity refined. Our activewear embodies the essence of minimalistic design, delivering effortless style that speaks volumes.
          </p>
        </div>

        <div className="quality-card">
          <div className="icon-wrapper">
            <FaCompressArrowsAlt />
          </div>
          <h3>Various Sizes</h3>
          <p>
            Designed for every body and anyone, our activewear embraces diversity with a wide range of sizes and shapes, celebrating the beauty of individuality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
