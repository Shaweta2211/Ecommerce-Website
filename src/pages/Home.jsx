import React from "react";
import { Banner } from "../components/Banner";
import { Marquee } from "../components/Marquee";
import { Collection } from "../components/Collection";
import { ProductCard } from "../components/ProductCard";
import { Testimonials } from "../components/Testionomials";
import { ShopCategories } from "../components/ShopCategories";
import { Services } from "../components/Services";
import { ShopGram } from "../components/ShopGram";


export function Home() {
  return (
    <>
      <Banner />
      <Marquee />
      <Collection />
         <ProductCard/>
         <Testimonials/>
          <ShopCategories/>
          <Services/>
          <ShopGram/>


    </>
  );
}
