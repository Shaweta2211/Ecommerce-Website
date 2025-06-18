import React from "react";
import "../assets/css/style.css";

import blog1 from "../assets/images/blog-1.jpg";
import blog2 from "../assets/images/blog-2.jpg";
import blog3 from "../assets/images/blog-3.jpg";
import blog4 from "../assets/images/blog-4.jpg";

import insta1 from "../assets/images/googles1.jpg";
import insta2 from "../assets/images/bag1.jpg";
import insta3 from "../assets/images/cap.jpg";
import insta4 from "../assets/images/shoes1.jpg";
import insta5 from "../assets/images/sneakers1.jpg";
import insta6 from "../assets/images/bag1.jpg";

const blogPosts = [
  {
    image: blog1,
    title: "Pop-punk is back in fashion",
    description:
      "And while these statements are theoretically more animal-friendly, is that they don’t actually require animal...",
  },
  {
    image: blog2,
    title: "The Limited Edition Club des Sports Courchevel",
    description:
      "And while these statements are theoretically more animal-friendly, is that they don’t actually require animal...",
  },
  {
    image: blog3,
    title: "Christine Is A True Style Icon",
    description:
      "And while these statements are theoretically more animal-friendly, is that they don’t actually require animal...",
  },
  {
    image: blog4,
    title: "Hello Fashion by Colombian-American",
    description:
      "And while these statements are theoretically more animal-friendly, is that they don’t actually require animal...",
  },
];

const instaImages = [insta1, insta2, insta3, insta4, insta5, insta6];

export default function BlogSection() {
  return (
    <div className="blog-container">
      {/* Left blog posts */}
      <div className="left-section">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right sidebar */}
      <div className="right-sidebar">
        {/* Blog categories */}
        <div className="sidebar-section">
          <h4>Blog categories</h4>
          <ul>
            <li>Accessories (9)</li>
            <li>Bag (6)</li>
            <li>Clocks/Clocks & Kitchen (5)</li>
            <li>Decor (6)</li>
            <li>Decorate (10)</li>
            <li>Others (3)</li>
          </ul>
        </div>

        {/* Recent posts */}
        <div className="sidebar-section">
          <h4>Recent Post</h4>
          <ul className="recent-posts">
            {blogPosts.slice(0, 3).map((post, index) => (
              <li key={index}>
                <img src={post.image} alt="" />
                <p>{post.title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Instagram section */}
        <div className="sidebar-section">
          <h4>Instagram</h4>
          <div className="instagram-grid">
            {instaImages.map((img, i) => (
              <img src={img} alt={`insta${i + 1}`} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
