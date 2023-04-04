import React from 'react'

import styles from '../styles/header.module.css'

function Hamburger() {
  return (
    <div className={styles.hamburger_container}>
      <div className={styles.patty}></div>
      <div className={styles.patty}></div>
      <div className={styles.patty}></div>
    </div>
  )
}

export default Hamburger
