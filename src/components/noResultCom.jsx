import React from 'react';
import noResult from "../assets/image/noResults.png";
import Layout from "./layout/layout.jsx";
import NewsLayout from "./layout/newsLayout.jsx";
import BodyLayout from "./layout/bodyLayout.jsx";

const NoResultCom = () => {
    return (
        <Layout>
            <NewsLayout>
                <BodyLayout title={'No Result Found'}>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-4 text-center">
                                <img alt="" className="w-75" src={noResult}/>
                            </div>
                        </div>
                    </div>
                </BodyLayout>
            </NewsLayout>
        </Layout>
    );
};

export default NoResultCom;