import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Layout from "../components/layout/layout.jsx";
import BodyLayout from "../components/layout/bodyLayout.jsx";

const AboutPage = () => {

    const type = useParams()


    return (
        <Layout>
            <BodyLayout title={`About ${type['type']}`}>
                <p>
                    The Ibn Sina Trust started its journey in June 1980 with a noble vision “To serve the humanity”. The trust has agreed upon to provide healthcare service to the people of Bangladesh at affordable cost. At the early of its commencement, few dedicated social workers of Bangladesh came together and had been united with a strong determination to serve people of the country, the compatriots. That ambition was materialized in the form of “The Ibn Sina Trust”.

                    At the time of launching, the trust was an institute of 13 employees including Physicians, Technical and Administrative staffs. Over the period of time, by the grace of almighty Allah Subhanahu Wa Tala, the Ibn Sina Trust is now a name of ‘TRUST’ in the sector of health care in Bangladesh and is one of the largest health service provider in South Asia.

                    The trust is now serving the people of Bangladesh by providing health facilities through a reputed Medical College, a renowned Nursing Institute, a specialized hospital with 300 beds along with other two general hospitals consist of 300 and 50 beds. Besides, the Ibn Sina Trust is more famous in the sector of diagnosis and investigation. It is an ISO certified organization and has one of the equipped laboratories of the country.

                    The laboratory and imaging reports of Ibn Sina Diagnostic centers are well accepted in Singapore General Hospital, Mount Elizabeth Hospital Singapore, Bumrungrad International Hospital Thailand and other reputed hospitals of Asia. It has been possible because of using latest analyzer and imaging machineries of medical science in Ibn Sina Diagnostic Centers. Well educated and the most experienced reporting consultants are working hard here to verify the reports.

                    It is our pride to mention that our consultants have authority on their respective area of expertise with European and North American degrees. The Ibn Sina Trust is enthusiastic to introduce the latest inventions of medical science of Germany, Europe and North America. Our laboratory has 3 Tesla with Biometric MRI, 128 slice CT scan machine and other latest imaging and laboratory machineries. It won’t be excess to mention that we have introduced these machines well ahead of other countries of South Asia. World famous Siemens-Germany, General Electronic-USA, Olympus Japan, Kiazon Japan, Nihonkoden Japan, and Fuji Japan are our proud suppliers.


                </p>
          </BodyLayout>
        </Layout>
    );
};

export default AboutPage;