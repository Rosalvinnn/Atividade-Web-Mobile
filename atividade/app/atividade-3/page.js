import styles from "./page.module.css";

export default function Atividade3() {
  return (
    <main className={styles.container}>
      <p className={styles.paragrafo}>
        Parágrafo da terceira atividade de CSS.
      </p>

      <a href="https://www.friv.com" className={styles.link}>
        Friv
      </a>

      <a href="https://www.youtube.com" className={styles.link}>
        YouTube
      </a>
    </main>
  );
}