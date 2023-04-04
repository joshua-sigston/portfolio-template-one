import React from 'react'

// framer motion
import { motion } from 'framer-motion'

import styles from '../styles/about.module.css'
import homeOne from '../img/home1.png'                            

function AboutSection() {
    const titleAnimation = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 2}}
    }

    const leftColAnimation = {
        hidden: {x: 100},
        show: {x: 0, transition: {duration: 0.75, ease: 'easeOut', staggerChildren: .5}}
    }
    
  return (
    <div className={styles.about_container}>
        <div className={styles.left_col}>
            <motion.div variants={leftColAnimation} initial="hidden" animate="show" className={styles.left_col}>
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
            <p>In nibh mauris cursus mattis molestie a iaculis at erat. Vitae elementum curabitur vitae nunc sed velit.</p>
            <button>Contact Us</button>
        </div>
        <div className={styles.right_col}>
            <img src={homeOne} alt="guy with a camera" className={styles.section_img}/>
        </div>
    </div>
  )
}

export default AboutSection
