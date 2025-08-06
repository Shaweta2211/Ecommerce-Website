import "../assets/css/style.css";

import accessoriesImg from "../assets/images/accessories.jpg";
import sunglassesImg from "../assets/images/sunglass.jpg";
import sneakersImg from "../assets/images/sneakers.jpg";
import bagsImg from "../assets/images/bags.jpg";
import collectionImg from "../assets/images/collection-15.jpg";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

export function ShopCategories() {
  const categories = [
    { name: "Accessories", img: accessoriesImg, link: "/accessories" },
    { name: "Sunglasses", img: sunglassesImg, link: "/glasses" },
    { name: "Sneakers", img: sneakersImg, link: "/sneakers" },
    { name: "Bags", img: bagsImg, link: "/bags" },
    { name: "Men", img: collectionImg, link: "/mens"},
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ fontWeight: 500, fontSize: 40 }}>
        Shop by categories
      </h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="scroll-item text-center position-relative">
              <img
                src={category.img}
                alt={category.name}
                className="img-fluid rounded"
              />

              {category.link ? (
                <Link to={category.link} className="category-button">
                  {category.name}
                </Link>
              ) : (
                <button className="category-button" type="button">
                  {category.name}
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
