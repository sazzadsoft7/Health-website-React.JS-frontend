import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/layout.jsx";
import BodyLayout from "../../components/layout/bodyLayout.jsx";
import ReactHtmlParser from 'html-react-parser';
import aboutData from '../../API stores/aboutData.js';

const AboutPage = () => {
    const { type } = useParams();  // Destructure the type from useParams
    const [title, setTitle] = useState("");  // Declare the title state
    const [desc, setDesc] = useState("");  // Declare the desc state

    useEffect(() => {
        if (aboutData[type]) {
            setTitle(aboutData[type].title);  // Set the title based on the 'type' parameter
            setDesc(aboutData[type].desc);  // Set the description with the HTML content
        } else {
            setTitle('empty');  // Fallback if no data found
            setDesc('');  // Clear the description in case of empty data
        }
    }, [type]);

    return (
        <Layout>
            <BodyLayout title={title}>
                <div>
                    {ReactHtmlParser(desc)}  {/* Use ReactHtmlParser to parse the HTML string */}
                </div>
            </BodyLayout>
        </Layout>
    );
};

export default AboutPage;
