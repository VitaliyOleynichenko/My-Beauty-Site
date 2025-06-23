import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Prices.module.css';

const cardHover = { scale: 1.05 };
const cardTransition = { duration: 0.3 };

const services = [
  { title: 'Пудровые брови', price: 3900, correction: 2500 },
  { title: 'Акварельные губы', price: 4200, correction: 2700 },
  { title: 'Межресничка', price: 3500, correction: 2200 },
];

export default function Prices() {
  return (
    <section className={styles.pricesSection}>
      <h1 className={styles.heading}>Прайс на услуги</h1>
      <div className={styles.grid}>
        {services.map(({ title, price, correction }) => (
          <motion.div
            key={title}
            className={styles.card}
            whileHover={cardHover}
            transition={cardTransition}
          >
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.price}>Первично: <span>₽{price}</span></p>
            <p className={styles.correction}>Коррекция: <span>₽{correction}</span></p>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `${styles.button} ${isActive ? styles.active : ''}`
              }
            >
              Записаться
            </NavLink>
          </motion.div>
        ))}
      </div>
    </section>
  );
}