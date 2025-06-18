

import React from "react";
import '../assets/css/style.css'

export function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-content">
          <h3>HOT COLLECTION</h3>
          <h1>
            Urban <br /> Street Style
          </h1>
          <div className="button">
            <a href=""className="btn btn-primary">Shop Collection <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}
