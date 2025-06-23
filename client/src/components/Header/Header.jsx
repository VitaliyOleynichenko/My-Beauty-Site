import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.btn} ${styles.active}` : styles.btn
          }
        >
          О себе
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? `${styles.btn} ${styles.active}` : styles.btn
          }
        >
          Портфолио
        </NavLink>
        <NavLink
          to="/prices"
          className={({ isActive }) =>
            isActive ? `${styles.btn} ${styles.active}` : styles.btn
          }
        >
          Прайс
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${styles.btn} ${styles.active}` : styles.btn
          }
        >
          Контакты
        </NavLink>
      </div>
    </div>
  );
}
