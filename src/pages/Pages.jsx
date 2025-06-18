import React from "react";
import AboutUs from "../pages/AboutUs";
import QualitySection from "../components/QualitySection";
import { Testimonials } from "../components/Testionomials";
import { ShopGram } from "../components/ShopGram";


export function Pages() {
  return (
    <>
      <AboutUs/>
      <QualitySection/>
      <Testimonials/>
       <ShopGram/>
       
    </>
  );
}
