import React from 'react'

import styles from '../styles/about-page.module.css'

import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import FaqSection from '../components/FaqSection'

// animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animations'

function AboutUs() {
  return (
    <motion.div className={styles.about_page_container} 
      variants={pageAnimation}
      initial='hidden'
      animate="show"
      exit="exit">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  )
}

export default AboutUs
