import React from "react";
import '../assets/css/style.css';
import img from '../assets/images/double-quotes.png'
import img1 from '../assets/images/cutegril.jpg';

export function Testimonials() {
    return (
        <section className="testinomial">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="right-quote mb-3">
                        <img src={img} alt="" />

                        </p>
                        <h5 className="mb-4">
                            "I have been shopping with this web fashion site for over <br />
                            a year now and I can confidently say it is the best online fashion <br />
                            site out there. The shipping is always fast and the customer <br />
                            service team is friendly and helpful. I highly recommend this <br />
                            site to anyone looking for affordable clothing."
                        </h5>
                        <h3 className="mb-2">Robert Smith</h3>
                        <h6 className="mb-4">
                            Purchase item: <span>Patterned scarf</span>
                        </h6>
                        <div className="angles">
                            <a href="#" className="angle-left me-3">
                                <i className="fa-solid fa-angle-left"></i>
                            </a>
                            <a href="#" className="angle-right">
                                <i className="fa-solid fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={img1} alt="Happy customer testimonial" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </section>
    );
}
