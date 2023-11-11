
import React from 'react'

import { Card } from '@/components';

import { icons } from '@/icons';

import styles from "./CardSelection.module.scss";
import Image from 'next/image';

const CardSelection = ({ data, action, currentStep }) => (
  <Card className={styles.container}>
    <h1>{data?.question}</h1>
    <div className={styles.cardGroup}>
      {data?.values?.map(({ nameEn, type, id, icon }) => (
        <Card key={id} onClick={() => action({ type, value: id, }, currentStep + 1)} className={styles.card} as='button'>
          <Image src={icons[icon]} alt={nameEn} height={40} width={40} />
          {nameEn}
        </Card>
      ))}
    </div>
  </Card>
)

export default CardSelection;
