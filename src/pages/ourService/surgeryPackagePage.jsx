import React from 'react';
import Layout from "../../components/layout/layout.jsx";
import NewsLayout from "../../components/layout/newsLayout.jsx";
import BodyLayout from "../../components/layout/bodyLayout.jsx";
import surgeryImage from './../../assets/image/serviceImage/surgery package.jpg'

const SurgeryPackagePage = () => {
    return (
        <Layout>
            <NewsLayout>
                <BodyLayout title={'Surgery Package'}>
                    <div className={'w-100'}>
                        <p>
                            Ibn Sina Hospital ensure about all types of surgery support of modern technology including C-arm, Operating microscope, Arthroscopy etc. Eight operation theatres are working round the clock with the guidance of experienced surgeons. Following operations are done regularly
                        </p>

                        <img src={surgeryImage} alt="surgery image" className={'w-100 p-3'}/>

                        <h4>
                            Surgery Services

                        </h4>

                        <ul>
                            <li>General Surgery</li>
                            <li>Advanced Laparoscopic Surgery (Cholecystectomy, Appendicectomy)</li>
                            <li>Head & Neck Surgery</li>
                            <li>Hepatobilliary Surgery</li>
                            <li>Upper GI Surgery</li>
                            <li>Neuro Surgery</li>
                            <li>Spine Surgery</li>
                            <li>Knee replacement and Arthroscopic surgery</li>
                            <li>Urology (Prostate, Kidney, Urinary bladder, Ureter, Urethra)</li>
                            <li>Paediatric Surgery</li>
                            <li>Colorectal surgery</li>
                            <li>Orthopaedic surgery</li>
                            <li>Plastic and cosmetic surgery</li>
                            <li>Barriartic surgery</li>
                            <li>Dermato surgery</li>
                            <li>Onco surgery, Laser and vascular surgery</li>
                            <li>Gynae & obs surgery</li>
                            <li>Thoracic surgery</li>
                            <li>Cardiac surgery</li>
                            <li>Dental surgery</li>
                            <li>Hand surgery</li>
                            <li>Vascular Surgery</li>
                        </ul>


                        <h4>
                            Operation Theater

                        </h4>

                        <p>We have 5 general OT, 2 Neuro Modular OT, 2 Gynae OT All the theatres well equipped with modern OT table, anesthesia machine with ventilator , C-ARM machine, operating microscopes and Instruments including cardiac monitor, with central oxygen suply.</p>

<p>                        Our well known efficient neurosurgeon has the ability to perform various difficult surgery e.g: F & D (PLID), lamninectomy (Spinal tumor), brain tumor surgery, CPID, stabilization, craniotomy, burr hole (SDH), EVD etc.
</p>
<p>                        We also perform various orthopedic surgery- who are efficient to perform TKR (Total Knee replacement), THR (Total Hip replacement) prosthesis, DHS, DCH, Interlocking, Bone grafting, Bone tumor surgery, arthroscopic surgery. ACL reconstruction etc.
</p>
<p>                        We have a established urology unit- Who has the ability of doing various difficult surgery- cystoscopic diversion, nephroureterectomy, adrenalectomy, PCNL.
</p>
<p>                        Also general urology case e.g. TURP,OIU,URS,ICPL,TURBT (urinary bladder tumor) cystoscopy, urethroplasty, kidney tumor etc.

</p>
<p>                        We also have specialist general surgeon to perform any laparoscopic surgery, colorectal surgery. consmetic surgery is in breast cancer and plastic surgeryby senior female surgeon .we have vascular care center where special vascular care are given by a team of vascular surgery headed by Prof. Dr.G.M. Makbul Hossain MS (Vascular surgery). This unit giving outdoor and indoor services doing all vascular surgery like femoro-popliteal by pass, stenting, fogartty catheterization, embotecto
</p>


                    </div>
                </BodyLayout>
            </NewsLayout>
        </Layout>
    );
};

export default SurgeryPackagePage;