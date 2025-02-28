import React from 'react';
import Layout from "../../components/layout/layout.jsx";
import NewsLayout from "../../components/layout/newsLayout.jsx";
import BodyLayout from "../../components/layout/bodyLayout.jsx";

const CardiacServicePage = () => {
    return (
        <Layout>
            <NewsLayout>
                <BodyLayout title={'Cardiac Service'}>
                    <ul>
                        <li>Cardiac Service</li>
                        <li>Cathlab</li>
                        <li>CICU</li>
                        <li>CCU</li>
                        <li>Cardiac surgery Team</li>
                        <li>Paediatric Cardiac Care</li>
                    </ul>
                    <h4 className={'border-top border-bottom'}>Cardiac service
                    </h4>

                    <p style={{ textAlign: 'justify' }}>
                    Cardiac problems are very common now a days all over the world. It is also the number one cause of morbidity and mortality in Bangladesh. To serve the cardiac patients of our country at reasonable price. The IBN SINA Trust had started its cardiac unit from July 2012 . After its inception the cardiac center has already serve near 8000 patients in its indoor and out-door.
                    </p>

                    <p style={{ textAlign: 'justify' }}>
                    The cardiac team has already done more than 4000 interventional procedure including coronary angiogram, coronary angioplasties, peripheral angiogram and angioplasties, carotid and cerebral angiogram and angioplasties, permanent pacemakers implementation, ICD and CRT implementation etc, Successfully in its state-of-the-art cathlab.
                    </p>

                    <p style={{ textAlign: 'justify' }}>
                    There have been more than 1000 cases of successful cardiac and vascular surgeries already done like By pass Beating and non-beating surgery, valve replacement surgery, congenital heart diseases etc. The cardiac hospital is equipped with latest equipment and apparatus. There is a highly skilled team of interventional cardiologists, cardiac surgeons and cardiac anesthesiologist serving in the hospital round the clock. The prices of all procedures are very reasonable, the service is of internation
                    </p>

                    <p style={{ textAlign: 'justify' }}>
                     The cardiac centre has large good faith amongst the well served patients and is already reputed as a dependable one-stop centre for all cardiac ailments. The center is giving outdoor services to cardiac patients where 24 hours facility is providing for doing ECG, ECHO, ETT, colour and carotid Doppler.
                     </p>


                </BodyLayout>
            </NewsLayout>
            
        </Layout>
    );
};

export default CardiacServicePage;