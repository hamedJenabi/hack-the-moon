'use client'

import data from '@/steps'
import styles from "./page.module.scss";
import { CardSelection } from "@/components";
import { useState } from "react";
import AddressInput from '@/components/AddressInput/AddressInput';
import DateField from '@/components/DateField/DateField';

export default function Home() {
  const [step, setStep] = useState('address')
  const [results, setResults] = useState([])

  const clickCallback = (values, step) => {
    setResults(current => [...current, values]);
    setStep(step);
  }

  const CardSelectionStep = <CardSelection data={data[step]} currentStep={step} action={clickCallback} />

  const planMapper = {
    'address': <AddressInput data={data[step]} action={setStep} />,
    'datePicker': <DateField data={data[step]} action={clickCallback} />,
    1: CardSelectionStep,
    2: CardSelectionStep,
    3: CardSelectionStep,
  };

  return (
    <main className={styles.main}>
      {planMapper[step]}
    </main>
  )
}
