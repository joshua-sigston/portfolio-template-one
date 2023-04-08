import React, { useState } from 'react'

import styles from '../styles/faqs.module.css'

import Toggle from './Toggle'

import { LayoutGroup } from 'framer-motion'

function FaqSection() {
  return (
    <div className={styles.faqs_container}>
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
    </div>
  )
}

export default FaqSection
