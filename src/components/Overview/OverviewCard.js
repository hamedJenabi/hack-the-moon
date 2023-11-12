import React from 'react'
import Image from 'next/image';
import { Card } from '@/components'
import styles from './Overview.module.scss'

const OverviewCard = ({ el: { image, city, title, street, phone, website, zipCode } }) => {
  return (
    <Card className={styles.card}>
      <Image src={image} className={styles.image} alt={title} fill />
      <div className={styles.content}>
        <h3>{title}</h3>
        <h4>{city}</h4>
        {/* <p className={styles.description}>asdfasdhjfb hkasbdfhkasdfasdhjfbhkasbdfhkasdfas dhjfbhkasbdfhkasdfasdh jfbhkasbdfhkasdfasdhjfbhkasbdfhkasdfasdhjfbhkasbdfhk</p> */}
        <p>{street}, {zipCode}</p>
        <p>{phone}</p>
        <div className={styles.buttonWrapper}>
          <a href={website} target='_blank'>Go to website</a>
        </div>
      </div>
    </Card>
  )
}

export default OverviewCard