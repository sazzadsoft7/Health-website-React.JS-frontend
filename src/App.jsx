import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import AboutPage from "./pages/aboutPage/aboutPage.jsx";
import FindADoctorPage from "./pages/findADoctorPage/findADoctorPage.jsx";
import PatientCarePage from "./pages/patientCarePage.jsx";
import myVariable from "./API stores/myVariable.js";
import HospitalServicePage from "./pages/ourService/hospitalServicePage.jsx";
import HomeServiceCovidPage from "./pages/ourService/homeServiceCovidPage.jsx";
import DiagnosticServicePage from "./pages/ourService/diagnosticServicePage.jsx";
import HealthCheckUpPackagesPage from "./pages/ourService/healthCheckUpPackagesPage.jsx";
import CardiacServicePage from "./pages/ourService/cardiacServicePage.jsx";
import SurgeryPackagePage from "./pages/ourService/surgeryPackagePage.jsx";

// top page position
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top for all pages except home
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null; // This component doesn't render anything but handles the scroll logic
}

function App() {
  return (
      <BrowserRouter>
        <ScrollToTop /> {/* This will run scroll logic on route change */}

        <Routes>
          <Route path='/' element={<HomePage/>}/>

          {/* About */}
          <Route path='/about/:type' element={<AboutPage/>}/>

          {/* Find a doctor */}
          <Route path='/findadoctor/:type' element={<FindADoctorPage/>}/>

          {/* Our Service */}
          <Route path={myVariable.hospitalService} element={<HospitalServicePage/>}/>
          <Route path={myVariable.homeServiceCovid} element={<HomeServiceCovidPage/>}/>
          <Route path={myVariable.diagnosticService} element={<DiagnosticServicePage/>}/>
          <Route path={myVariable.cardiacService} element={<CardiacServicePage/>}/>
          <Route path={myVariable.healthCheckupPackage} element={<HealthCheckUpPackagesPage/>}/>
          <Route path={myVariable.surgeryPackage} element={<SurgeryPackagePage/>}/>

          {/* Patient care page */}
          <Route path='/patientcare' element={<PatientCarePage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
