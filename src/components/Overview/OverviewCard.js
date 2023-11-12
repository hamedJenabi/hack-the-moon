import React from 'react'
import Image from 'next/image';
import { Card } from '@/components'
import styles from './Overview.module.scss'

const OverviewCard = ({ el: { image, city, title, street, phone, website, zip_code } }) => {
  return (
    <Card className={styles.card}>
      <Image src={image} className={styles.image} alt={title} fill />
      <div className={styles.content}>
        <h3>{city}</h3>
        <h4>{title}</h4>
        <p>{street}, {zip_code}</p>
        <p>{phone}</p>
        <div className={styles.buttonWrapper}>
          <a href={website} target='_blank'>Go to website</a>
        </div>
      </div>
    </Card>
  )
}

export default OverviewCard