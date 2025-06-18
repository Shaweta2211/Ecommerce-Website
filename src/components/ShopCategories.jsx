import "../assets/css/style.css";

import accessoriesImg from "../assets/images/accessories.jpg";
import sunglassesImg from "../assets/images/sunglass.jpg";
import sneakersImg from "../assets/images/sneakers.jpg";
import bagsImg from "../assets/images/bags.jpg";
import collectionImg from "../assets/images/collection-15.jpg";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
export function ShopCategories() {
  const categories = [
    { name: "Accessories", img: accessoriesImg },
    { name: "Sunglasses", img: sunglassesImg },
    { name: "Sneakers", img: sneakersImg },
    { name: "Bags", img: bagsImg },
    { name: "Men", img: collectionImg },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ fontWeight: 500, fontSize: 40 }}>Shop by categories</h2>

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
              <button className="category-button" type="submit">
                {category.name}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
