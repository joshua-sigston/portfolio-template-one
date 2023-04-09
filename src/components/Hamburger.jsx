import React from 'react'

import styles from '../styles/header.module.css'

function Hamburger({toggleNav, setToggleNav}) {
  
  const handleToggle = () => {
    setToggleNav(!toggleNav)
  }

  return (
    <div className={styles.hamburger_container} onClick={handleToggle}>
      <div className={styles.patty}></div>
      <div className={styles.patty}></div>
      <div className={styles.patty}></div>
    </div>
  )
}

export default Hamburger
