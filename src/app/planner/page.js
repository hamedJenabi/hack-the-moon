import styles from "./page.module.scss";
import CardSelection from "@/components/CardSelection/CardSelection";

const data = {
  question: 'Whats your interest?',
  values: [
    { label: "Culture", value: 'culture' },
    { label: "Active", value: 'active' },
    { label: "Kid-friendly", value: 'kidFriendly' },
    { label: "Relax", value: 'relax' },
  ]
}

export default function Home() {

  return (
    <main className={styles.main}>
      <CardSelection data={data} />
    </main>
  )
}
