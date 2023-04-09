import React, { useState } from 'react'

import styles from '../styles/faqs.module.css'

import Toggle from './Toggle'

import { LayoutGroup, motion } from 'framer-motion'
import UseScroll from './UseScroll'
import { fade } from '../animations'

function FaqSection() {
  const [element, controls] = UseScroll()
  return (
    <motion.div className={styles.faqs_container}
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}>
      <h2>Any Quesitons <span>FAQ</span></h2>
      <div className={styles.questions_container}>
      <LayoutGroup>
      <Toggle title='How do I start?'>    
        <div className={styles.answer}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi.</p>
        </div>      
      </Toggle>
      <Toggle title='Daily Question?'>
        <div className={styles.answer}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi.</p>
        </div>      
      </Toggle>
      <Toggle title='Payment Methods?'>
        <div className={styles.answer}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi.</p>
        </div>      
      </Toggle>
      <Toggle title='What products do you offer?'>
        <div className={styles.answer}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi.</p>
        </div>      
      </Toggle>
      </LayoutGroup>
      </div>
    </motion.div>
  )
}

export default FaqSection
