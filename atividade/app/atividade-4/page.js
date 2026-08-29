
import styles from "./page.module.css";

export default function Atividade4() {
  return (
    <div className={styles.pagina}>
      <h1>Loja de Calçados</h1>

      <div className={styles.produtos}>
        <div className={styles.produto}>
          <img src="/esportivo.wepb" alt="Tênis esportivo" />
          <h2>Tênis Esportivo</h2>
          <p>R$ 199,90</p>
        </div>

        <div className={styles.produto}>
          <img src="/casual.wepb" alt="Tênis casual" />
          <h2>Tênis Casual</h2>
          <p>R$ 159,90</p>
        </div>

        <div className={styles.produto}>
          <img src="/corrida.wepb" alt="Tênis de corrida" />
          <h2>Tênis de Corrida</h2>
          <p>R$ 249,90</p>
        </div>

        <div className={styles.produto}>
          <img src="/urbano.wepb" alt="Tênis urbano" />
          <h2>Tênis Urbano</h2>
          <p>R$ 179,90</p>
        </div>

        <div className={styles.produto}>
          <img src="/classico.wepb" alt="Tênis clássico" />
          <h2>Tênis Clássico</h2>
          <p>R$ 219,90</p>
        </div>
      </div>

      <footer className={styles.rodape}>
        Minha Loja de Calçados
      </footer>
    </div>
  );
}