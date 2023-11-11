import React from 'react'

import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <div className={styles.container}>
      <a className={styles.link}>Home</a>
    </div>
  )
}

export default Navigation