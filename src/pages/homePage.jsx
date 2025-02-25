import React from 'react';
import Header from "../components/layout/header.jsx";
import Layout from "../components/layout/layout.jsx";
import SliderCom from "../components/sliderCom.jsx";
import WarningCom from "../components/warningCom.jsx";
import FeatureCartCom from "../components/featureCartCom.jsx";

const HomePage = () => {
    return (
        <Layout>
            <SliderCom/>
            <WarningCom/>
            <FeatureCartCom/>
        </Layout>
    );
};

export default HomePage;