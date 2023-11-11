'use client'

import React from 'react'

import { RadioAsCard, Card, RadioGroup } from '@/components';
import { unstable_useFormState as useFormState } from 'reakit/Form';

import styles from "./CardSelection.module.scss";

const CardSelection = ({ data }) => {

  const form = useFormState({
    values: { question: data.question, state: null },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles.container}>
      <h1>{data.question}</h1>
      <Card>
        <RadioGroup
          {...form}
          name="state"
          items={data.values}
          asRadio={RadioAsCard}
        />
      </Card>
    </div>
  )
}

export default CardSelection;
