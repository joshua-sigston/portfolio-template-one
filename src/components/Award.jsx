import React from 'react'

import styles from '../styles/movie.module.css'

function Award({title, description, key}) {
  return (
    <div key={key} className={styles.award_container}>
      <h3>{title}</h3>
      <div className={styles.line}></div>
      <p>{description}</p>
    </div>
  )
}

export default Award
