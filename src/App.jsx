import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import FindADoctorPage from "./pages/findADoctorPage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>

      {/*    About*/}
          <Route path='/about/:type' element={<AboutPage/>}/>


      {/*    find a doctor*/}
          <Route path='/findadoctor/:type' element={<FindADoctorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
