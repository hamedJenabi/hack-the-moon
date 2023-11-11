import React from 'react'

import styles from './Navigation.module.scss'
import Image from "next/image";
import Link from 'next/link';
const Navigation = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
              alt=""
              src="/logo.svg"
              width={50}
              height={20}
              />
              </Link>
     
    </div>
  )
}

export default Navigation