import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import brandImage from "./../../assets/image/headerImage/brand-logo.png";
import hotlineImage from "./../../assets/image/headerImage/hotline-logo.png";
import supportMailImage from "./../../assets/image/headerImage/supportmail-logo.png";

const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

    const menuItems = [
        { title: "Home", path: "/" },
        {
            title: "About Us",
            path: "#",
            subMenu: [
                { title: "About our trust", path: "/about/trust" },
                { title: "Mission and Vision", path: "/about/mission" },
            ],
        },
        {
            title: "Find a Doctor",
            path: "#",
            subMenu: [
                { title: "Name wise", path: "/findadoctor/name" },
                { title: "Department wise", path: "/findadoctor/department" },
                { title: "Branch wise", path: "/findadoctor/branch" },
            ],
        },
        { title: "Contact", path: "/contact" },
    ];

    return (
        <div>
            {/* First Row: Contact Info */}
            <div className="container-fluid py-2 bg-light">
                <div className="row align-items-start">
                    {/* Brand Logo */}
                    <div className="col-md-4">
                        <Link to="/">
                            <img src={brandImage} alt="Brand Logo" height={'80px'} />
                        </Link>
                    </div>

                    {/* Hotline */}
                    <div className="col-md-4">
                        <Link to="https://wa.me/09610010615" target='_blank'>
                            <img src={hotlineImage} alt="hotline Logo" />
                        </Link>
                    </div>

                    {/* Support Email */}
                    <div className="col-md-4">
                        <Link to="mailto:info@ibnsinatrust.com" target='_blank'>
                            <img src={supportMailImage} alt="supportMail Logo" />
                        </Link>
                    </div>
                </div>
            </div>

            <hr />

            {/* Navbar Section */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    {/* Toggle Button for Mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}
                        aria-controls="navbarNav"
                        aria-expanded={isNavbarOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <FaBars />
                    </button>

                    {/* Navbar Links */}
                    <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            {menuItems.map((item, index) => (
                                <li key={index} className={`nav-item ${item.subMenu ? "dropdown" : ""}`}>
                                    {item.subMenu ? (
                                        <>
                                            <Link
                                                className="nav-link dropdown-toggle"
                                                to={item.path}
                                                id={`dropdown${index}`}
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                {item.title}
                                            </Link>
                                            <div className="dropdown-menu">
                                                {item.subMenu.map((subItem, subIndex) => (
                                                    <Link key={subIndex} className="dropdown-item" to={subItem.path}>
                                                        {subItem.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link className="nav-link home-menu" to={item.path}>
                                            {item.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Search Bar */}
                        <form className="form-inline d-flex">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                <FaSearch />
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* Custom CSS for Smooth Dropdown Hover Effect */}
            <style>
                {`
        .home-menu:hover{
          font-weight: bold;
        }

        .dropdown:hover{
          font-weight: bold;
        }

        .dropdown-item {
          position: relative;
          transition: transform 0.3s ease;
          background-color: transparent !important; /* Keeps background transparent */
        }

        .dropdown-item:hover {
          transform: translateX(10px); /* Moves the item 10px to the right */
          background-color: transparent !important; /* Ensures transparency */
          font-weight: bold; /* Makes it bold */
        }

        .dropdown-item:hover::after {
          content: ' >'; /* Adds the '>' sign */
          position: absolute;
          left: 0px; /* Adjusts spacing */
          color: inherit; /* Matches text color */
          font-weight: bold; /* Makes it bold */
        }

        /* Initially hide dropdown */
        .dropdown-menu {
          opacity: 0;
          height: 0px;
          visibility: hidden;
          transform: translateY(-5px); /* Move slightly up */
          transition: transform 0.4s ease-out, opacity 0.4s ease-out;
          display: block; /* Prevent Bootstrap from overriding */
        }

        /* Show dropdown on hover */
        .nav-item.dropdown:hover .dropdown-menu {
          opacity: 1;
          height: auto;
          visibility: visible;
          transform: translateY(0); /* Move to normal position */
        }
        `}
            </style>
        </div>
    );
};

export default Header;
