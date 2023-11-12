'use client'

import { CardSelection } from "@/components";
import { useState } from "react";
import AddressInput from '@/components/AddressInput/AddressInput';
import DateField from '@/components/DateField/DateField';
import Overview from "@/components/Overview/Overview";

const Planner = ({ data }) => {
  const [step, setStep] = useState('address')
  const [results, setResults] = useState([])

  const clickCallback = (values, step) => {
    setResults(current => [...current, values]);
    setStep(step);
  }

  const planMapper = {
    'address': <AddressInput data={data[step]} action={clickCallback} />,
    'datePicker': <DateField data={data[step]} action={clickCallback} />,
    'interests': <CardSelection data={data[step]} currentStep={step} action={clickCallback} />,
  };

  return <>{data[step] ? planMapper[step] : <Overview results={results} />}</>
}

export default Planner;