import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/faqs.module.css'

function Toggle({children, title}) {
    const [toggle, setToggle] = useState(false)

  return (
    <motion.div layout onClick={() => {setToggle(!toggle)}}>
        <motion.h4 layout>{title}</motion.h4>
        {toggle ? children : ''}
        <div className={styles.line}></div>
    </motion.div>
  )
}

export default Toggle
