import React, { useEffect, useState } from 'react';
import Layout from "../components/layout/layout.jsx";
import BodyLayout from "../components/layout/bodyLayout.jsx";
import patientCareData from './../API stores/json/patientCareData/patientCareData.json';
import NewsLayout from "../components/layout/newsLayout.jsx";

const PatientCarePage = () => {
    const [info, setInfo] = useState([]);

    // State to store selected branch and service
    const [selectedBranch, setSelectedBranch] = useState("");
    const [selectedService, setSelectedService] = useState("");

    useEffect(() => {
        setInfo(patientCareData);
    }, []);

    // Filter info based on selected branch and service
    const selectedInfo = info.find(
        (item) => item.branchTitle === selectedBranch && item.patientCareServiceTitle === selectedService
    );

    return (
        <Layout>
            <NewsLayout>
                <BodyLayout title={'Patient Care'}>
                    <div className="container mt-4">
                        <div className="row">
                            {/* Branch Selection */}
                            <div className="col-md-6 mb-3">
                                <label htmlFor="branch" className="form-label fw-bold">Select Branch</label>
                                <select
                                    className="form-select"
                                    name="branch"
                                    id="branch"
                                    value={selectedBranch}
                                    onChange={(e) => setSelectedBranch(e.target.value)}
                                >
                                    <option value="">Select Branch</option>
                                    {info.map((item, index) => (
                                        <option key={index} value={item.branchTitle}>{item.branchTitle}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Service Selection */}
                            <div className="col-md-6 mb-3">
                                <label htmlFor="patientCareService" className="form-label fw-bold">Select Patient Care Service</label>
                                <select
                                    className="form-select"
                                    name="patientCareService"
                                    id="patientCareService"
                                    value={selectedService}
                                    onChange={(e) => setSelectedService(e.target.value)}
                                >
                                    <option value="">Select Service</option>
                                    {info.map((item, index) => (
                                        <option key={index} value={item.patientCareServiceTitle}>{item.patientCareServiceTitle}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Display Selected Information */}
                        {selectedInfo && (
                            <div className="card mt-4">
                                <div className="card-body">
                                    <h4 className="card-text"><strong>Service:</strong> {selectedInfo.patientCareServiceTitle}</h4>
                                    <p className="card-text">{selectedInfo.desc}</p>
                                    <h4 className="card-title text-primary">Contact Info</h4>
                                    <p className="card-text">{selectedInfo.contactInfo}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </BodyLayout>
            </NewsLayout>
        </Layout>
    );
};

export default PatientCarePage;
