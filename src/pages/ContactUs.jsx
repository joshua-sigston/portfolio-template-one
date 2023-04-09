import React from 'react'

import ScrollTop from '../components/ScrollTop'

// animations
import { motion } from 'framer-motion'
import { pageAnimation, titleAnimation } from '../animations'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// styles
import styles from '../styles/contact-page.module.css'


function ContactUs() {
  return (
    <motion.div variants={pageAnimation}
      initial='hidden'
      animate="show"
      exit="exit"
      className={styles.contact_container}>
      <div className={styles.hide_container}>
        <motion.h2 variants={titleAnimation}>Get In Touch</motion.h2>
      </div>
      <div className={styles.contact_methods_container}>
          <div className={styles.hide_container}>
            <a href="#" className={styles.link}><motion.i class="fa-regular fa-envelope" variants={titleAnimation}></motion.i></a>
          </div>
          <div className={styles.hide_container}>
            <a href="#" className={styles.link}><motion.i class="fa-brands fa-linkedin" variants={titleAnimation}></motion.i></a>
          </div>
          <div className={styles.hide_container}>
            <a href="#" className={styles.link}><motion.i class="fa-brands fa-instagram" variants={titleAnimation}></motion.i></a>
          </div>
      </div>
      <ScrollTop />
    </motion.div>
  )
}

export default ContactUs
