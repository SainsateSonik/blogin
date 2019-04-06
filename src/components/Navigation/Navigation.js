import React from "react";
import "./Navigation.css";

const navigation = (props) => {
    return (
        <div className="navbar">
            <div className="brand">Blogin</div>
            <div className="hamburger-icon-bars">
                <i className="fas fa-bars"></i>
            </div>
            <ul className="nav-links">
                <li>About us</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};


export default navigation;