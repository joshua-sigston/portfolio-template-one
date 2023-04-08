import React from 'react'

import Wave from './Wave'

// framer motion
import { motion } from 'framer-motion'

import styles from '../styles/about.module.css'
import homeOne from '../img/home1.png'      
import { titleAnimation, fade, photoAnimation } from '../animations'


function AboutSection() {
    
  return (
    <div className={styles.about_container}>
        <div className={styles.left_col}>
            <motion.div >
                <div className={styles.hide}>
                    <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                </div>
                <div className={styles.hide}>
                    <motion.h2 variants={titleAnimation}>Your <span>dreams</span> come</motion.h2>
                </div>
                <div className={styles.hide}>
                    <motion.h2 variants={titleAnimation}>true.</motion.h2>
                </div>
            </motion.div>
            <motion.p variants={fade}>In nibh mauris cursus mattis molestie a iaculis at erat. Vitae elementum curabitur vitae nunc sed velit.</motion.p>
            <motion.button variants={fade}>Contact Us</motion.button>
        </div>
        <div className={styles.right_col}>
            <motion.img variants={photoAnimation} src={homeOne} alt="guy with a camera" className={styles.section_img}/>
        </div>
        <Wave className={styles.wave}/>
    </div>
  )
}

export default AboutSection
