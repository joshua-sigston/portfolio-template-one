import React from "react";
import {Router, Routes, Route, useLocation} from 'react-router-dom'

import styles from './styles/app.module.css'

import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MoiveDetails from "./pages/MoiveDetails";

// animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  return (
    <div className={styles.app_container}>
      <AnimatePresence mode="wait">
        <Header />
          <Routes location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
