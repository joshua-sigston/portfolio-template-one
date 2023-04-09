import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/work-page.module.css'
import athlete from '../img/athlete-small.png'
import racer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'

import ScrollTop from '../components/ScrollTop'

// animations
import { motion, AnimatePresence } from 'framer-motion'
import { pageAnimation, fade, photoAnimation, lineAnimation, slider, sliderContainer } from '../animations'

function OurWork() {
  return (
    <motion.div className={styles.work_container}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit">
      <motion.div variants={sliderContainer}>
        <motion.div variants={slider} className={styles.frame_one}></motion.div>
        <motion.div variants={slider} className={styles.frame_two}></motion.div>
        <motion.div variants={slider} className={styles.frame_three}></motion.div>
        <motion.div variants={slider} className={styles.frame_four}></motion.div>
      </motion.div>
      <div className={styles.movie_container}>
        <motion.h2 variants={fade}>Athlete</motion.h2>
        <motion.div variants={lineAnimation} className={styles.line}></motion.div>
        <Link to='/work/the-athlete' className={styles.image_container}>
          <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
        </Link>
      </div>
      <div className={styles.racer_container}>
        <motion.h2 variants={fade}>Racer</motion.h2>
        <motion.div variants={lineAnimation} className={styles.line}></motion.div>
        <Link to='/work/the-racer' className={styles.image_container}>
          <motion.img variants={photoAnimation} src={racer} alt="racer" />
        </Link>
      </div>
      <div className={styles.goodtimes_container}>
        <motion.h2 variants={fade}>Goodtimes</motion.h2>
        <motion.div variants={lineAnimation} className={styles.line}></motion.div>
        <Link to='/work/goodtimes' className={styles.image_container}>
          <motion.img variants={photoAnimation} src={goodtimes} alt="goodtimes" />
        </Link>
      </div>
      <ScrollTop />
    </motion.div>
  )
}

export default OurWork
