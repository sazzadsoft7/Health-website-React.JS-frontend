import React from 'react';
import Header from "../components/layout/header.jsx";
import Layout from "../components/layout/layout.jsx";
import SliderCom from "../components/sliderCom.jsx";
import WarningCom from "../components/warningCom.jsx";
import FeatureCardCom from "../components/featureCardCom.jsx";
import PatientCareCom from "../components/patientCareCom.jsx";

const HomePage = () => {
    return (
        <Layout>
            <SliderCom/>
            <WarningCom/>
            <FeatureCardCom/>

            <PatientCareCom/>
        </Layout>
    );
};

export default HomePage;