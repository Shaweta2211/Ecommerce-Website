import React from "react";
import "../assets/css/style.css"; 

const serviceData = [
    {
        id: 1,
        icon: "fa-solid fa-cube",
        title: "Free Shipping",
        description: "Free shipping over order $120"
    },
    {
        id: 2,
        icon: "fa-regular fa-credit-card",
        title: "Flexible Shipping",
        description: "Pay with Multiple Credit Cards",
    },
    {
        id: 3,
        icon: "fa-solid fa-left-long",
        title: "14 Days Return",
        description: "Within 30 days for an exchange",
    },
    {
        id: 4,
        icon: "fa-solid fa-headset",
        title: "Premium Support",
        description: "Outstanding Premium Support",
    },
];

export function Services() {
    return (
        <div className="services">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {serviceData.map((service) => (
                        <div className="col" key={service.id}>
                            <div className="card text-center p-3">
                                <i className={`${service.icon} logos fs-2 mb-3`}></i>
                                <p className="service-items fs-5">{service.title}</p>
                                <p className="service-item">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
