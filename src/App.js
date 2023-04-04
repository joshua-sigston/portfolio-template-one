import React from "react";
import {Router, Routes, Route} from 'react-router-dom'

import styles from './styles/app.module.css'

import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MoiveDetails from "./pages/MoiveDetails";

function App() {
  return (
    <div className={styles.app_container}>
      <Header />
        <Routes>
          <Route path="/"
            element={<AboutUs />}>
          </Route>
          <Route path="/work"
            element={<OurWork />}>
          </Route>
          <Route path="/work/:id"
            element={<MoiveDetails />}>
          </Route>
          <Route path="/contact"
            element={<ContactUs />}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
