
import React from 'react'

import { RadioAsCard, Card, RadioGroup } from '@/components';

import styles from "./CardSelection.module.scss";
import Image from 'next/image';

const CardSelection = ({ data, action }) => {

  return (
    <Card className={styles.container}>
      {/* <RadioGroup
          {...form}
          name="state"
          items={data?.values}
          asRadio={RadioAsCard}
        /> */}
      <h1>{data?.question}</h1>
      <div className={styles.cardGroup}>
        {data?.values.map(el => (
          <Card key={el.label} onClick={() => action(el.value)} className={styles.card}>
            <Image src={el.icon} alt={el.label} height={40} width={40} />
            {el.label}
          </Card>
        ))}
      </div>
    </Card>
  )
}

export default CardSelection;
