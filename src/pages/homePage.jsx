import React from 'react';
import Header from "../components/layout/header.jsx";
import Layout from "../components/layout/layout.jsx";
import SliderCom from "../components/sliderCom.jsx";
import WarningCom from "../components/warningCom.jsx";
import FeatureCardCom from "../components/featureCardCom.jsx";
import PatientCareCom from "../components/patientCareCom.jsx";
import ServiceBannerCom from "../components/serviceBannerCom.jsx";
import GalleryCom from "../components/galleryCom.jsx";
import ServiceCardCom from "../components/serviceCardCom.jsx";

const HomePage = () => {
    return (
        <Layout>
            <SliderCom/>
            <WarningCom/>
            <FeatureCardCom/>

            <PatientCareCom/>
            <ServiceBannerCom/>
            <ServiceCardCom/>
            <GalleryCom/>
        </Layout>
    );
};

export default HomePage;