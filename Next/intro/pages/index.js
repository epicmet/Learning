import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hi Nextjs</h1>
      <Link href="/products">products</Link>
      <br />
      <Link href="/clients">Clients</Link>
    </div>
  );
}
