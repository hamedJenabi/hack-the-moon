import { getData } from '@/steps'
import styles from "./page.module.scss";
import Planner from '@/components/Planner/Planner';

export default async function Home() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <Planner data={data} />
    </main>
  )
}
