import React from 'react'

import styles from '../styles/services.module.css'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import homeTwo from '../img/home2.png'

function ServicesSection() {
  return (
    <div className={styles.services_container}>
      <div className={styles.left_col}>
        <h2>High <span>quality</span> services</h2>
        <div className={styles.cards_container}>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src={clock} alt="clock" className={styles.icon_img}/>
                    <h3>Efficient</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src={diaphragm} alt="clock" className={styles.icon_img}/>
                    <h3>Diaphragm</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src={money} alt="clock" className={styles.icon_img}/>
                    <h3>Affordable</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src={teamwork} alt="clock" className={styles.icon_img}/>
                    <h3>Teamwork</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
      </div>
      <div className={styles.right_col}>
        <img src={homeTwo} alt="home" className={styles.section_img}/>
      </div>
    </div>
  )
}

export default ServicesSection
