import React from 'react';
import patientCareImage from './../assets/image/patientCareImage/Finest-Patient-Care-&-Amenities-2.jpg'
import myVariable from "../API stores/myVariable.js";
import {Link} from "react-router-dom";

const PatientCareCom = () => {

    const text = [
        "Information",
        "Report Delivery",
        "Customer Care",
        "Cash Counter",
        "Pharmacy / Medicine",
        "Billing",
    "Admission Counseling",
    "Customer Service"
    ]

    return (
        <>
            <div className="container">
                <div className="row">
                    {/* Text div */}
                    <div className="col-md-6  p-3">
                        <div className="row ">
                            <div className="col-md-6  mx-auto ">
                                <span className="fst-italic">Finest Patient</span>
                                <h4>Care & Amenities</h4>
                                <ul className="lh-lg">
                                    {text.map((item, index) => (
                                        <li key={index} className="list-unstyled fst-italic">
                                            <i className="bi bi-arrow-right-circle-fill fw-bold text-success"></i> {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to={myVariable.patientCarePageLink}>
                                    <button className="btn btn-primary">
                                        Explore <i className="bi bi-arrow-right"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Image div */}
                    <div className="col-md-6  wrap position-relative">
                        <img
                            src={patientCareImage}
                            alt="Patient care image"
                            className="position-absolute top-50 start-50 translate-middle h-100"
                        />
                    </div>
                </div>
            </div>

        </>
    );
};

export default PatientCareCom;