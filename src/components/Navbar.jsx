
import { NavLink } from "react-router-dom";

import React from "react";
import "../assets/css/style.css"

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white ">
            <div className="container" >
                <a className="navbar-brand" href="#">
                    <img src="..\src\assets\images\logo.svg" alt="log img" height="40" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-NavLink" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-NavLink" to="product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-NavLink" to="blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-NavLink" to="about">AboutUs</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex gap-3">
                        <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                        <a href="#"><i className="fa-solid fa-user"></i></a>
                        <div className="nav-right">
                            <a href="#"><i className="fa-solid fa-heart"></i></a>
                            <p>3</p>
                        </div>
                        <div className="nav-right">
                            <a href="#"><i className="fa-solid fa-bag-shopping"></i></a>
                            <p>1</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}


