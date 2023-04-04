import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/work-page.module.css'
import athlete from '../img/athlete-small.png'
import racer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'

function OurWork() {
  return (
    <div className={styles.work_container}>
      <div className={styles.movie_container}>
        <h2>Athlete</h2>
        <div className={styles.line}></div>
        <Link to='/work/the-athlete'>
          <img src={athlete} alt="athlete" />
        </Link>
      </div>
      <div className={styles.racer_container}>
        <h2>Racer</h2>
        <div className={styles.line}></div>
        <Link to='/work/the-racer'>
          <img src={racer} alt="racer" />
        </Link>
      </div>
      <div className={styles.goodtimes_container}>
        <h2>Goodtimes</h2>
        <div className={styles.line}></div>
        <Link to='/work/goodtimes'>
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </div>
    </div>
  )
}

export default OurWork
