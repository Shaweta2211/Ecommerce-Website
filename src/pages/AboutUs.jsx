import React from "react";


import heroImage from "../assets/images/hero.jpg";
import founderImage from "../assets/images/founder.avif";
import missionImage from "../assets/images/hero.avif";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="overlay">
          <h1>Empowering women to achieve fitness goals with style</h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="intro-section">
        <h2>We are Ecomous</h2>
        <p>
          Welcome to our closet-centered clothing store, where we believe that timeless style never goes out of fashion. 
          Our collections balance classic pieces that team with polish and versatility, perfect for building a wardrobe that will last for years.
        </p>
      </section>

      {/* History Section */}
      <section className="content-section">
        <div className="image-block">
          <img src={founderImage} alt="Founder" />
        </div>
        <div className="text-block">
          <h3>Established - 1995</h3>
          <p>
            Ecomous was founded in 1995 by Julia Smith, a fashion lover with a passion for timeless design. 
            What started as a boutique idea in a studio apartment has grown into a global fashion brand. 
            Her mission was simple — to create clothes that make people feel confident and stylish. 
            From that vision in West London, Ecomous quickly became a local favorite.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="content-section reverse">
        <div className="text-block">
          <h3>Our mission</h3>
          <p>
            Our mission is to empower people through sustainable fashion. 
            We believe fashion should be inclusive, bold, and planet-friendly. 
            As we expand across the globe, we strive to stay rooted in creativity and eco-consciousness.
          </p>
        </div>
        <div className="image-block">
          <img src={missionImage} alt="Mission" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
