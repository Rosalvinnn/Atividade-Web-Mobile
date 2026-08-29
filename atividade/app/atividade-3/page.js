import styles from "./page.module.css";

export default function Atividade3() {
  return (
    <main className={styles.container}>
      <p className={styles.paragrafo}>
        Este é um parágrafo da terceira atividade de CSS. Todo o texto
        deste parágrafo deve aparecer sublinhado e utilizando a fonte Arial.
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