import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/header.module.css'

import Hamburger from './Hamburger'

import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

function Header() {
  const {pathname} = useLocation()
  const [toggleNav, setToggleNav] = useState(false)

  const handleToggle = () => {
    setToggleNav(!toggleNav)
  }

  const toggleLeft = {left: !toggleNav ? '100%' : '0'}
  return (
    <header className={styles.header_container}>
      <h1><Link to="/">Moment</Link></h1>
      <Hamburger toggleNav={toggleNav} setToggleNav={setToggleNav}/>

      <nav className={styles.desktop_nav} style={toggleLeft}>
        <ul>
          <li>
            <Link to="/" onClick={handleToggle}>1. About Us</Link>
            <motion.div className={styles.nav_line} 
              transition={{duration: .75}} 
              initial={{width: "0%"}}
              animate={{width: pathname === "/" ? "100%" : "0%"}}>
            </motion.div>
          </li>
          <li>
            <Link to="/work" onClick={handleToggle}>2. Our Works</Link>
            <motion.div className={styles.nav_line} 
              transition={{duration: .75}} 
              initial={{width: "0%"}}
              animate={{width: pathname === "/work" ? "100%" : "0%"}}>
            </motion.div>
          </li>
          <li>
            <Link to="/contact" onClick={handleToggle}>3. Contact Us</Link>
            <motion.div className={styles.nav_line} 
              transition={{duration: .75}} 
              initial={{width: "0%"}}
              animate={{width: pathname === "/contact" ? "100%" : "0%"}}>
            </motion.div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
