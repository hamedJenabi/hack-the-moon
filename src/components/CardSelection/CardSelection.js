
import React from 'react'

import { Card, Button } from '@/components';

import { icons } from '@/icons';

import { Clickable } from 'reakit/Clickable';

import { useCheckboxState, Checkbox } from "reakit/Checkbox";
import styles from "./CardSelection.module.scss";
import Image from 'next/image';

const CardSelection = ({ data, action, currentStep }) => {
  const checkbox = useCheckboxState({ state: [] });

  const handleClick = () => {
    action({ type: data?.values?.[0].type, value: checkbox.state, }, currentStep + 1)
    checkbox.setState([]);
  }

  return (
    <Card className={styles.container}>
      <h1>{data?.question}</h1>
      <div className={styles.cardGroup}>
        {data?.values?.map(({ nameEn, type, id, icon }) => (
          <>
            <label>
              <Checkbox {...checkbox} value={id} key={id} className={styles.checkbox} />
              <Clickable
                as={Card}
                className={styles.card}
              >
                <Image src={icons[icon]} alt={nameEn} height={40} width={40} />
                {nameEn}
              </Clickable>
            </label>
          </>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={handleClick}>Next</Button>
      </div>
    </Card>
  )
}

export default CardSelection;
