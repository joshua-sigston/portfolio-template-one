import React from 'react'

import styles from '../styles/about-page.module.css'

import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import FaqSection from '../components/FaqSection'

function AboutUs() {
  return (
    <div className={styles.about_page_container}>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </div>
  )
}

export default AboutUs
