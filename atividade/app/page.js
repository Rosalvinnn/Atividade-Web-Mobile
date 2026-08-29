
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>Primeiro exercício de CSS</h1>

      <div className={styles.links}>
        <a href="https://atividade-six-phi.vercel.app/atividade-2">Atividade 2</a>
        <a href="https://atividade-six-phi.vercel.app/atividade-3">Atividade 3</a>
        <a href="https://atividade-six-phi.vercel.app/atividade-4">Atividade 4</a>
      </div>
    </main>
  );
}