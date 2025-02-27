import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import AboutPage from "./pages/aboutPage/aboutPage.jsx";
import FindADoctorPage from "./pages/findADoctorPage/findADoctorPage.jsx";
import PatientCarePage from "./pages/patientCarePage.jsx";
import myVariable from "./API stores/myVariable.js";
import HospitalServicePage from "./pages/ourService/hospitalServicePage.jsx";
import HomeServiceCovidPage from "./pages/ourService/homeServiceCovidPage.jsx";
import DiagnosticServicePage from "./pages/ourService/diagnosticServicePage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>

      {/*    About*/}
          <Route path='/about/:type' element={<AboutPage/>}/>


      {/*    find a doctor*/}
          <Route path='/findadoctor/:type' element={<FindADoctorPage/>}/>

      {/*    Our Service*/}
          <Route path={myVariable.hospitalService} element={<HospitalServicePage/>}/>
          <Route path={myVariable.homeServiceCovid} element={<HomeServiceCovidPage/>}/>
          <Route path={myVariable.diagnosticService} element={<DiagnosticServicePage/>}/>

      {/*    Patient care page*/}
          <Route path='/patientcare' element={<PatientCarePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
