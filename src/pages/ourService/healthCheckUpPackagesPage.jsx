import React from 'react';
import Layout from "../../components/layout/layout.jsx";
import NewsLayout from "../../components/layout/newsLayout.jsx";
import BodyLayout from "../../components/layout/bodyLayout.jsx";
import packagesData from './../../API stores/json/OurService/packages.json'

const HealthCheckUpPackagesPage = () => {
    const healthCheckupPackages = packagesData['healthCheckUpPackage']

    return (

        <Layout>
            <NewsLayout>
                <BodyLayout title={'Health Check-up Packages'}>
                    <div className="container mt-4">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                            <tr>
                                <th>Code</th>
                                <th>Package Name</th>
                                <th>Original Rate</th>
                                <th>Package Rate</th>
                                <th>Doctor's Fee (If necessary)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {healthCheckupPackages.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.code}</td>
                                    <td>{item.packageName}</td>
                                    <td>{item.originalRate}</td>
                                    <td>{item.packageRate}</td>
                                    <td>{item.doctorsFee}</td>
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

export default HealthCheckUpPackagesPage;