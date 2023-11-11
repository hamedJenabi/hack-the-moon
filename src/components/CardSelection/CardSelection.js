
import React from 'react'

import { Card } from '@/components';

import styles from "./CardSelection.module.scss";
import Image from 'next/image';

const CardSelection = ({ data, action, currentStep }) => (
  <Card className={styles.container}>
    <h1>{data?.question}</h1>
    <div className={styles.cardGroup}>
      {data?.values.map(({ label, type, value, icon }) => (
        <Card key={label} onClick={() => action({ type, value }, currentStep + 1)} className={styles.card} as='button'>
          <Image src={icon} alt={label} height={40} width={40} />
          {label}
        </Card>
      ))}
    </div>
  </Card>
)

export default CardSelection;
