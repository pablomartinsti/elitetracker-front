import { PaperPlaneRight, Trash } from '@phosphor-icons/react';
import styles from './styles.module.css';
import Sidebar from '../../components/sidebar';

function Habits() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.container}>
        <div className={styles.content}>
          <header>
            <h1>Hábitos diários</h1>
            <span>Hoje, 12 de dezembro</span>
          </header>
          <div className={styles.input}>
            <input placeholder="Digite um novo Hábito" type="text" />
            <PaperPlaneRight />
          </div>
          <div className={styles.habits}>
            {Array(6)
              .fill(1)
              .map((_, index) => (
                <div key={index} className={styles.habit}>
                  <p>Estudar ingles {index + 1}</p>
                  <div>
                    <input type="checkbox" name="" id="" />
                    <Trash />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habits;
