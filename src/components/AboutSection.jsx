import React from 'react'

import styles from '../styles/about.module.css'
import homeOne from '../img/home1.png'

function AboutSection() {
  return (
    <div>
        <div className={styles.description}>
            <div className={styles.title}>
                <div className={styles.hide}>
                    <h2>We work to make</h2>
                </div>
                <div className={styles.hide}>
                    <h2>Your <span>dreams</span> come</h2>
                </div>
                <div className={styles.hide}>
                    <h2>true.</h2>
                </div>
            </div>
            <p>In nibh mauris cursus mattis molestie a iaculis at erat. Vitae elementum curabitur vitae nunc sed velit.</p>
            <button>Contact Us</button>
        </div>
        <div>
            <img src={homeOne} alt="guy with a camera" />
        </div>
    </div>
  )
}

export default AboutSection
