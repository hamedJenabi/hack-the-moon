'use client'

import { CardSelection } from "@/components";
import { useState } from "react";
import AddressInput from '@/components/AddressInput/AddressInput';
import DateField from '@/components/DateField/DateField';

const Planner = ({ data }) => {
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
  return <>{planMapper[step]}</>
}

export default Planner;