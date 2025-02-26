import React from 'react';
import {useParams} from "react-router-dom";
import Layout from "../../components/layout/layout.jsx";

const FindADoctorPage = () => {

    const type = useParams()

    return (
        <Layout>
            <h1>Find a doctor {type['type']} page</h1>
        </Layout>
    );
};

export default FindADoctorPage;