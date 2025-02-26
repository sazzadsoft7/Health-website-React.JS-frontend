import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import AboutPage from "./pages/aboutPage/aboutPage.jsx";
import FindADoctorPage from "./pages/findADoctorPage/findADoctorPage.jsx";
import PatientCarePage from "./pages/patientCarePage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>

      {/*    About*/}
          <Route path='/about/:type' element={<AboutPage/>}/>


      {/*    find a doctor*/}
          <Route path='/findadoctor/:type' element={<FindADoctorPage/>}/>

      {/*    Patient care page*/}
          <Route path='/patientcare' element={<PatientCarePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
