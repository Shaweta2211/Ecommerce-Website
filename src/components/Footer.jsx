import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

import logoImg from "../assets/images/logo.svg";
import paymentImg1 from "../assets/images/img1.jpg";
import paymentImg2 from "../assets/images/img2.jpg";
import paymentImg3 from "../assets/images/img3.png";

import flagUS from "../assets/images/flag.png";
import flagIndia from "../assets/images/india.avif";
import flagUK from "../assets/images/uk.avif";

// Footer Data
const footerInfo = {
  logo: logoImg,
  address: [
    "1234 Fashion Street, Suite 567,",
    "New York, NY 10001",
    "Email: info@fashionshop.com",
    "Phone: (212) 555-1234",
  ],
  directionText: "Get direction",
};

const socialIcons = [
  { iconClass: "fa-brands fa-facebook", url: "https://facebook.com/yourpage" },
  { iconClass: "fa-brands fa-x-twitter", url: "https://twitter.com/yourpage" },
  { iconClass: "fa-brands fa-instagram", url: "https://instagram.com/yourpage" },
  { iconClass: "fa-brands fa-tiktok", url: "https://tiktok.com/@yourpage" },
  { iconClass: "fa-brands fa-pinterest", url: "https://pinterest.com/yourpage" },
];

const footerLinks = [
  {
    title: "Help",
    links: [
      { name: "Privacy Policy", path: "#" },
      { name: "Returns + Exchanges", path: "#" },
      { name: "Shipping", path: "#" },
      { name: "Terms & Conditions", path: "#" },
      { name: "FAQ'S", path: "#" },
      { name: "Compare", path: "#" },
      { name: "My Wishlist", path: "#" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "Our Story", path: "#" },
      { name: "Visit Our Store", path: "#" },
      { name: "Contact Us", path: "/contact" },
      { name: "About Us", path: "/about" },
    ],
  },
];

const paymentImages = [
  { src: paymentImg1, alt: "Payment Method 1" },
  { src: paymentImg2, alt: "Payment Method 2" },
  { src: paymentImg3, alt: "Payment Method 3" },
];

const countries = [
  { name: "United States (USD)", code: "USD", flag: flagUS },
  { name: "India (INR)", code: "INR", flag: flagIndia },
  { name: "United Kingdom (GBP)", code: "GBP", flag: flagUK },
];

const languages = ["English", "Spanish", "German"];

export function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          {/* Logo and Address */}
          <div className="col-12 col-md-3 mb-4">
            <img src={footerInfo.logo} alt="Logo" className="mb-3" />
            {footerInfo.address.map((line, index) => (
              <p key={index} className="mb-1">{line}</p>
            ))}
            <p className="mt-2">
              {footerInfo.directionText}{" "}
              <i className="fa-solid fa-up-right-from-square"></i>
            </p>
            <div className="d-flex mt-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 text-dark"
                >
                  <i className={social.iconClass} style={{ fontSize: "20px" }}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="col-12 col-md-3 mb-4">
              <h6 className="fw-bold mb-3">{section.title}</h6>
              <ul className="list-unstyled">
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    {link.path.startsWith("/") ? (
                      <Link to={link.path} className="text-decoration-none">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.path} className="text-decoration-none">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Sign Up for E-mail</h6>
            <p>
              Sign up to get first dibs on new arrivals, sales, exclusive content, events, and more!
            </p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email..."
              />
              <button type="submit" className="btn btn-dark ms-2">
                Subscribe <i className="fa-solid fa-square-up-right"></i>
              </button>
            </form>

            {/* Country & Language */}
            <div className="mt-4 d-flex gap-1">
              <div className="mb-3">
                <select className="form-select">
                  {countries.map((country, idx) => (
                    <option key={idx} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select className="form-select">
                  {languages.map((lang, idx) => (
                    <option key={idx} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 border-top pt-4">
          <p className="mb-2 mb-md-0">
            <i className="fa-regular fa-copyright"></i> 2025 Ecomus
            Store. All Rights Reserved
          </p>
          <div className="d-flex">
            {paymentImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="me-2"
                style={{ height: "30px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
