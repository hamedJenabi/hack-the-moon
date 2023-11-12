import React from 'react'
import Image from 'next/image';
import { Card } from '@/components'
import styles from './Overview.module.scss'
import { icons } from '@/icons';

const OverviewCard = ({ el: { image, city, title, street, phone, website, zipCode }, startDate, endDate }) => {
  const availableHours = {
    start: `${new Date(startDate).getUTCHours()}:${new Date(startDate).getMinutes().toString().padStart(2, '0')}`,
    end: `${new Date(endDate).getUTCHours()}:${new Date(endDate).getMinutes().toString().padStart(2, '0')}`,
  }
  return (
    <div>
      <div className={styles.topSection}>
        <Image src={icons['alarm']} width={20} height={20} className={styles.icon} alt='alarm' />
        Visit between {availableHours.start} and {availableHours.end}
      </div>
      <Card className={styles.card}>
        <Image src={image} className={styles.image} alt={title} fill />
        <div className={styles.content}>
          <h3>{title}</h3>
          <h4>{city}</h4>
          <p>{street}, {zipCode}</p>
          <p>{phone}</p>
          <div className={styles.buttonWrapper}>
            <a href={website} target='_blank'>Go to website</a>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default OverviewCard