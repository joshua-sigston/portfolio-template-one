import React from 'react'

import styles from '../styles/services.module.css'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import homeTwo from '../img/home2.png'

function ServicesSection() {
  return (
    <div className={styles.services}>
      <div className={styles.description}>
        <h2>High <span>quality</span> services</h2>
        <div className={styles.cards_container}>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src={clock} alt="clock" />
                    <h3>Efficient</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src={diaphragm} alt="clock" />
                    <h3>Diaphragm</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src={money} alt="clock" />
                    <h3>Affordable</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src={teamwork} alt="clock" />
                    <h3>Teamwork</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
      </div>
      <div className={styles.image_container}>
        <img src={homeTwo} alt="home" />
      </div>
    </div>
  )
}

export default ServicesSection
