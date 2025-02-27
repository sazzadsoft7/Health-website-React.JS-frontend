import React from 'react';
import Layout from "../../components/layout/layout.jsx";
import NewsLayout from "../../components/layout/newsLayout.jsx";
import BodyLayout from "../../components/layout/bodyLayout.jsx";
import hospitalData from './../../API stores/json/OurService/hospitalServiceData.json'
import homeServiceImage from "../../assets/image/newsImage/home_searvice.jpg";
import surgeryImage from "../../assets/image/newsImage/surgery.jpg";

const HospitalServicePage = () => {
    return (
        <Layout>
            <NewsLayout image={[homeServiceImage,surgeryImage]}>
                <BodyLayout title={'Hospital Service'}>
                    <div className="container mt-4">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                            <tr>
                                <th>Category</th>
                                <th>Services</th>
                            </tr>
                            </thead>
                            <tbody>
                            {hospitalData.map((item, index) => (
                                <tr key={index}>
                                    <td><strong>{item.category}</strong></td>
                                    <td>
                                        <ul>
                                            {item.services.map((service, i) => (
                                                <li key={i}>{service}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </BodyLayout>
            </NewsLayout>
        </Layout>
    );
};

export default HospitalServicePage;