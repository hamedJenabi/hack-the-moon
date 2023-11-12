import React from 'react'
import { getResults } from '@/lib/fetchResults';
import { testResults } from '@/lib/testResults';
import styles from './Overview.module.scss'
import OverviewCard from './OverviewCard';

const Overview = ({ results }) => {

  return (
    <div className={styles.wrapper}>
      <h1>See what we have prepared for you</h1>
      {JSON.parse(JSON.stringify(testResults)).map((el) => (
        <OverviewCard key={el.id} el={el} />
      ))}
    </div>
  )
}

export default Overview