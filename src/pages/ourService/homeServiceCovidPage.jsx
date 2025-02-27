import React from 'react';
import Layout from "../../components/layout/layout.jsx";
import NewsLayout from "../../components/layout/newsLayout.jsx";
import BodyLayout from "../../components/layout/bodyLayout.jsx";
import homeServiceImage from './../../assets/image/newsImage/home_searvice.jpg'
import surgeryImage from './../../assets/image/newsImage/surgery.jpg'

const HomeServiceCovidPage = () => {
    return (
        <Layout>
            <NewsLayout>
                <BodyLayout title={'Home Service'}>
                    <div className={'w-100'}>
                        <img src={homeServiceImage} alt="Home service image" className={'w-100 p-3'}/>
                        <img src={surgeryImage} alt="Surgery image" className={'w-100 p-3'}/>

                    </div>
                </BodyLayout>
            </NewsLayout>
        </Layout>
    );
};

export default HomeServiceCovidPage;