'use client'

import React, { useEffect, useState } from 'react'
import styles from './Overview.module.scss'
import OverviewCard from './OverviewCard';
import { Card } from '@/components';
import LottieAnimation from '../LottieAnimation/Lottie';

const Overview = ({ results }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      const url = `https://moon.neon.zone/api/schedules?token=nJDknmuPRbUEXZ5B`;

      setIsLoading(true);
      await fetch(url, {
        method: "POST",
        headers: { 'accept': 'application/json', 'content-type': 'application/json' },
        body: JSON.stringify(Object.assign({}, ...results))
      },).then((response) =>
        response.text()).then((res) => JSON.parse(res))
        .then((json) => {
          setIsLoading(false);
          setData(json.data);
        }).catch((err) => console.log({ err }));
    };

    fetchResults();

  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>See what we have prepared for you</h1>
      <div className={styles.overviewCardWrapper}>
        {data?.items?.length && data?.items?.map((el) => (
          <OverviewCard key={el.id} el={el?.poi} startDate={el.startTime} endDate={el.endTime} />
        ))}
         {!data?.items?.length && !isLoading && <Card>Results not found</Card>}

        {isLoading && <LottieAnimation/>}

      </div>
    </div>
  )
}

export default Overview