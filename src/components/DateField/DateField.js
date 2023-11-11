import React, { useState } from 'react';

import BaseDatePicker from '@/components/DatePicker/DatePicker';
import Card from '@/components/Card/Card';
import Button from '@/components/Button/Button';
import styles from './DateField.module.scss'

const DateField = ({ data, action }) => {
  const [pickedDate, setPickedDate] = useState(new Date());

  return (
    <Card className={styles.container}>
      <h1>{data?.question}</h1>
      <BaseDatePicker selectedDate={pickedDate} onChange={date => setPickedDate(date)} />
      <div className={styles.buttonContainer}>
        <Button onClick={() => action({ type: 'date', value: pickedDate }, 1)}>Next</Button>
      </div>
    </Card>
  );
};

export default DateField;
