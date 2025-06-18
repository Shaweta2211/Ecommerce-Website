import img1 from '../assets/images/ribbed top.jpg'
import img2 from '../assets/images/tank top.jpg'
import img3 from '../assets/images/oversized.jpg'
import img4 from '../assets/images/brown-3.jpg'
import img5 from '../assets/images/sweatshirt.jpg'
import img6 from '../assets/images/hoodie.webp'
import img7 from '../assets/images/regularfit.jpg'
import img8 from '../assets/images/image.png'
import img9 from '../assets/images/slimfit.jpg'
import img10 from '../assets/images/croptop.webp'
import img11 from '../assets/images/shirtwomen.jpeg'
import img12 from '../assets/images/menshirt.jpg'


import img01 from '../assets/images/hover1.jpeg'
import img02 from '../assets/images/hover2.jpg'
import img03 from '../assets/images/hover3.jpeg'
import img04 from '../assets/images/hover4_.jpg'
import img05 from '../assets/images/hover5.jpg'
import img06 from '../assets/images/hover6.webp'
import img07 from '../assets/images/hover7.webp'
import img08 from '../assets/images/hover8.jpg'
import img09 from '../assets/images/hover9.jpg'
import img010 from '../assets/images/hover10.avif'
import img011 from '../assets/images/hover11.avif'
import img012 from '../assets/images/hover12.webp'




export const NEWARIVALS = [
    {
      id: 1,
      name: "Ribbed Tank Top",
      price: 16.95,
      image: img1,
      hoverimage:img01,
      hasTimer: false,
      tag:"Newarival"
    },
    {
      id: 2,
      name: "Ribbed Modal Tank Top",
      price: 18.95,
      image: img2,
      hoverimage:img02,
      hasTimer: true,
      endTime: new Date(Date.now() + 52 * 24 * 60 * 60 * 1000 + 10 * 60 * 60 * 1000 + 13 * 60 * 1000 + 53 * 1000),
    },
    {
       id: 3,
       name: "Oversized Printed T-shirt",
       price: 10.0,
       image: img3,
       hoverimage:img03,
       hasTimer: false,
     },
    {
       id: 4,
       name: " V-neck Shirt",
       price: 16.95,
       image: img4,
       hoverimage:img04,
       hasTimer: false,
     },
     
    {
       id: 5,
       name: "Stylish T-shirt",
       price: 14.99,
       image: img5,
       hoverimage:img05,
       hasTimer: false,
     },
     {
       id: 6,
       name: "Basic T-shirt",
       price: 9.95,
       image: img6,
       hoverimage:img06,
       hasTimer: false,
     },
     {
      id: 7,
      name: "Regular Fit Shirt",
      price: 12.99,
      image: img7,
      hoverimage:img07,
      hasTimer: false,
     },
    {
       id: 8,
       name: "Loose Fit Swaetshirt",
       price: 21.99,
       image: img8,
       hoverimage:img08,
       hasTimer: false,
     },
     {
       id: 9,
       name: "Turtlenet Swearter",
       price: 15.0,
       image: img9,
       hoverimage:img09,
       hasTimer: false,
     },
     {
      id: 10,
      name: "Stylish Crop-top",
      price: 13.45,
      image: img10,
      hoverimage:img010,
      hasTimer: false,
     },
     {
      id: 11,
      name: "Stylish Tops",
      price: 10.95,
      image: img11,
      hoverimage:img011,
      hasTimer: false,
     },
     {
     id: 12,
     name: "Stylish Shirt",
     price: 17.25,
     image: img12,
     hoverimage:img012,
     hasTimer: false,
     },
  ];