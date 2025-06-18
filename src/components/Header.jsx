import React, { useState, useEffect } from "react";
import "../assets/css/style.css";

export function Header() {
  const messages = [
    "Summer sale discount 70%",
    "Time Refresh to your wardrobe",
    <>
      Spring Fashion sale <span>Shop Now{" "}
        <i className="fa-solid fa-arrow-trend-up"></i>
      </span>
    </>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // Country and language options
  const currencies = [
    { country: "USA", code: "USD", flag: "flag.png" },
    { country: "UK", code: "GBP", flag: "uk.avif" },
    { country: "India", code: "INR", flag: "india.avif" },
  ];

  const languages = ["English", "Spanish", "German"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <div className="contacts">
              <p>+333(123-1688)</p>
              <p>sayhello@ecomous.com</p>
            </div>

            <div className="discount">
              {messages.map((msg, index) => {
                const directionClass =
                  index % 2 === 0 ? "slide-left" : "slide-right";
                return (
                  <p
                    key={index}
                    className={`discount-line ${
                      index === currentIndex ? `active ${directionClass}` : ""
                    }`}
                  >
                    {msg}
                  </p>
                );
              })}
            </div>

            <div className="header-right">
              <div className="currency-dropdown">
                <img
                  src={`../src/assets/images/${currencies.find(
                    (currency) => currency.code === selectedCurrency
                  ).flag}`}
                  alt="flag"
                  className="currency-flag"
                />
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.country} ({currency.code})
                    </option>
                  ))}
                </select>
              </div>

              <div className="language-dropdown">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  {languages.map((language, index) => (
                    <option key={index} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
