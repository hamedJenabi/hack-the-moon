import { getData } from '@/steps'
import styles from "./page.module.scss";
import Planner from '@/components/Planner/Planner';
import Navigation from '@/components/Navigation/Navigation';

export default async function Home() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Navigation />
        <div className={styles.plannerContainer}>
          <Planner data={data} />
        </div>
      </div>
    </main>
  )
}
