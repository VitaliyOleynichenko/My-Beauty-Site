// src/pages/Contacts/Contacts.jsx
import styles from './Contacts.module.css';
import { FaVk, FaTelegramPlane, FaPhoneAlt } from 'react-icons/fa';

export default function Contacts() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2>Контакты</h2>
        <ul className={styles.list}>
          <li>
            <a href="https://vk.com/id122251888" target="_blank" rel="noreferrer">
              <FaVk className={styles.icon} />
              ВКонтакте
            </a>
          </li>
          <li>
            <a href="https://t.me/Anastasiyka95" target="_blank" rel="noreferrer">
              <FaTelegramPlane className={styles.icon} />
              Telegram
            </a>
          </li>
          <li>
            <a href="tel:+79844544304">
              <FaPhoneAlt className={styles.icon} />
              +7 984 454‑43‑04
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
