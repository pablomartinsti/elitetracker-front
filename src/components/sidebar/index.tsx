import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { ListChecks, SignOut } from '@phosphor-icons/react';

function Sidebar() {
  return (
    <div className={styles.container}>
      <img src="https://github.com/pablomartinsti.png" />
      <div className={styles.links}>
        <Link to="/">
          <ListChecks />
        </Link>
      </div>
      <SignOut className={styles.signout} />
    </div>
  );
}

export default Sidebar;
