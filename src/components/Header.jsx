import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/header.module.css'

import Hamburger from './Hamburger'

function Header() {
  return (
    <header className={styles.header_container}>
      <h1><Link to="/">Moment</Link></h1>
      <Hamburger />
      <nav className={styles.desktop_nav}>
        <ul>
          <li><Link to="/">1. About Us</Link></li>
          <li><Link to="/work">2. Our Works</Link></li>
          <li><Link to="/contact">3. Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
