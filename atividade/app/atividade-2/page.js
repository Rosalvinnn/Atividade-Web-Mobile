import styles from "./page.module.css";

export default function Atividade2() {
  return (
    <main className={styles.container}>
      <div className={styles.vermelho}>
        DIV vermelho — 700px de largura
      </div>

      <div className={styles.verde}>
        DIV verde — 700px de largura + 25px de padding
      </div>
    </main>
  );
}