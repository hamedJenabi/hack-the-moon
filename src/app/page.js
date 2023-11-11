import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import FormDatePicker from "@/components/DatePicker/DatePicker";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <Image
            className={styles.background}
            src="/background.png"
            alt=""
            fill
          />
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Discover Upper Austria</h2>
          </div>
          <Link className={styles.link} href="/help">
            Get started
          </Link>
          <div className={styles.arrowWrapper}>
            <Image
              className={styles.arrowDown}
              alt=""
              src={"/arrow_forward_ios.svg"}
              width={35}
              height={35}
            />
          </div>
        </div>
        <div className={styles.section}>
          <div>
            <h2 className={styles.sectionTitle}>235 Activities</h2>
            <p className={styles.sectionText}>to choose from</p>
          </div>
          <p className={styles.sectionText}>adventures for all ages</p>
          <div>
            <h2 className={styles.sectionTitle}>1000+</h2>
            <p className={styles.sectionText}>locations</p>
          </div>
        </div>
      </div>
    </main>
  );
}
