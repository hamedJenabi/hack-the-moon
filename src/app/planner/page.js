'use client'

import data from '@/steps'
import styles from "./page.module.scss";
import { CardSelection, Button } from "@/components";
import { useState } from "react";
import { unstable_useFormState as useFormState } from 'reakit/Form';


export default function Home() {
  const [step, setStep] = useState(1)
  const [results, setResults] = useState([])

  const clickCallback = values => {
    setStep(step + 1)
    setResults(current => [...current, values])
  }

  const form = useFormState({
    values: { state: null },
  });

  console.log(results)

  return (
    <main className={styles.main}>
      {data[step] ? (<CardSelection data={data[step]} form={form} action={clickCallback} />) : (<Button>submit</Button>)}
    </main>
  )
}
