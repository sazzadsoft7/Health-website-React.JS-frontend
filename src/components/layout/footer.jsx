import React from 'react';
import {Link} from "react-router-dom";
import brandImage from "../../assets/image/headerImage/brand-logo.png";
import myVariable from '../../API stores/myVariable.js'

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-black text-white ">
                <div className="row">
                    <div className="col-md-4 col-12 py-3">
                        {/* Brand Logo */}
                        <div className="col-md-4 ">
                            <Link to="/">
                                <img src={brandImage} alt="Brand Logo" height={'50px'} />
                            </Link>
                        </div>

                        <p>
                            To serve the humanity as a whole with this noble vision the Ibn Sina Trust started its journey in June 1980. The trust has agreed upon to provide health care service to the people of Bangladesh with affordable cost.
                        </p>

                        <div className="contact-info d-grid">
                            {/* Location */}
                            <Link to={myVariable.location} className="contact-item text-decoration-none gap-2 d-flex align-items-center">
                                <i className="bi bi-geo-alt-fill"></i>
                                <span>Your Location</span>
                            </Link>

                            {/* Phone */}
                            <Link to={myVariable.whatsApp} target="_blank" className="contact-item text-decoration-none gap-2 d-flex align-items-center">
                                <i className="bi bi-telephone-fill"></i>
                                <span>{myVariable.phoneNumber}</span>
                            </Link>

                            {/* Email */}
                            <Link to={myVariable.supportMail} className="contact-item text-decoration-none gap-2 d-flex align-items-center">
                                <i className="bi bi-envelope-fill"></i>
                                <span>{myVariable.email}</span>
                            </Link>

                            {/* Social Media Icons */}
                            <div className="social-media d-flex gap-2">
                                {/* Facebook */}
                                <Link to={myVariable.facebook} target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <i className="bi bi-facebook"></i>
                                </Link>

                                {/* LinkedIn */}
                                <Link to={myVariable.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <i className="bi bi-linkedin"></i>
                                </Link>

                                {/* Twitter */}
                                <Link to={myVariable.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <i className="bi bi-twitter"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*second column*/}
                    <div className="col-md-4 col-12  py-3">
                        <p>
                            <h4>Visitor counter</h4>
                        </p>

                        {/*total count*/}
                        <p>
                            <i className="bi bi-people-fill"></i>
                            <span> Total visitor count: {myVariable.totalVisitorCount} </span>
                        </p>

                        {/*unique count*/}
                        <p>
                            <i className="bi bi-person-fill"></i>
                            <span> Unique visitor count: {myVariable.uniqueVisitorCount} </span>
                        </p>

                        {/*Page visitor*/}
                        <p>
                            <i className="bi bi-eye-fill"></i>
                            <span> Page visitor count: {myVariable.pageVisitorCount} </span>
                        </p>

                    </div>

                    {/*third column*/}
                    <div className="col-md-4 col-12 py-3 px-3">
                        <h4>Contact Us</h4>
                        <form onSubmit={(e) => e.preventDefault()} className=" shadow rounded bg-gradient">
                            {/* Email Input */}
                            <div className="mb-3">
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Message Input */}
                            <div className="mb-3">
                                <textarea
                                    id="message"
                                    className="form-control"
                                    rows="3"
                                    placeholder="Write your message..."
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;