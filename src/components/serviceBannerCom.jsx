import React from 'react';
import serviceBannerImage from "./../assets/image/serviceImage/Service banner image.jpg"
import {Link} from "react-router-dom";
import myVariable from "../API stores/myVariable.js";

const ServiceBannerCom = () => {
    return (
        <div className="container d-flex justify-content-center ">
            <div className="row">
                <div className="com-md-6 col-12 d-none d-md-block h-100">
                    <img src={serviceBannerImage} alt="service image" className={'h-100 end-0'}/>
                </div>
            </div>
            <div className="col-md-6 col-12 d-flex  align-items-center justify-content-end p-5 "
                 style={{borderRadius: "50px 400px 50px 400px"}}>
                <div className="col-md-4 col-12 ">
                    <h4>Best Laboratory
                    </h4>

                    <h4>Tests Available
                    </h4>

                    <h5><i className='bi bi-three-dots'/>
                        We provide best test services</h5>

                    <ul className={'list-unstyled fst-italic lh-lg '}>
                        <li>
                            <i className='bi bi-arrow-right-circle-fill'/> Haematological Exam
                        </li>
                        <li><i className='bi bi-arrow-right-circle-fill'/> Exam
                        </li>
                        <li><i className='bi bi-arrow-right-circle-fill'/>Elisa Method Hepatitis (Panel)
                        </li>
                        <li><i className='bi bi-arrow-right-circle-fill'/>HIV TEST
                        </li>
                        <li><i className='bi bi-arrow-right-circle-fill'/>Hormone Test
                        </li>
                        <li><i className='bi bi-arrow-right-circle-fill'/>Immunology / Serology
                        </li>
                    </ul>
                    <Link to={myVariable.diagnosticService}>
                        <button className={'btn btn-success '}>
                            Learn More <i className={'bi bi-arrow-right'}/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default ServiceBannerCom;