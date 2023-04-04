import React from 'react'

import styles from '../styles/faqs.module.css'

function FaqSection() {
  return (
    <div className={styles.faqs_container}>
      <h2>Any Quesitons <span>FAQ</span></h2>
      <div className={styles.questions_container}>
        <div className={styles.question}>
          <h4>How do I start?</h4>
          <div className={styles.answer}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi.</p>
          </div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.question}>
          <h4>Daily Schedule?</h4>
          <div className={styles.answer}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi.</p>
          </div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.question}>
          <h4>Payment methods?</h4>
          <div className={styles.answer}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi.</p>
          </div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.question}>
          <h4>What products do you offer?</h4>
          <div className={styles.answer}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi.</p>
          </div>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  )
}

export default FaqSection
