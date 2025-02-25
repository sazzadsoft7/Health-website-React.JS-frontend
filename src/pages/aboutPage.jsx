import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Layout from "../components/layout/layout.jsx";

const AboutPage = () => {

    const type = useParams()
    console.log(type);

    return (
        <Layout>
          <h1>
             {type['type']} page
          </h1>
        </Layout>
    );
};

export default AboutPage;