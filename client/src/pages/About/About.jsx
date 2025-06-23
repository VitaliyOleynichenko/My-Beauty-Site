import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styles from './About.module.css';
import masterPhoto from '../../assets/master.jpg'; // замените на своё изображение

// анимация появления на scroll
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// анимация при наведении
const hoverEffect = {
  scale: 1.05,
  transition: { duration: 0.3, type: 'spring', stiffness: 150 }
};

export default function About() {
  return (
    <motion.div
      className={styles.aboutContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <motion.div
        className={styles.photoWrapper}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={hoverEffect}
      >
        <motion.img
          src={masterPhoto}
          alt="Мастер"
          className={styles.photo}
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 200 }}
        />
      </motion.div>
      <motion.div
        className={styles.textBlock}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2>О себе</h2>
        <p>
          Привет! Меня зовут Анастасия, и я мастер перманентного макияжа.
          <br /><br />
          Как и многие женщины, я долгое время сама рисовала свои брови каждый день, стараясь подчеркнуть естественную красоту. Но со временем поняла, что хочу упростить себе жизнь и сделать образ более стойким и естественным. Так я впервые попробовала перманентный макияж — и была в восторге от результата!
          <br /><br />
          Это вдохновило меня не только на собственные изменения, но и на желание помогать другим женщинам чувствовать себя уверенно и красиво без лишних усилий.
          <br /><br />
          Сегодня я с любовью создаю естественные, гармоничные образы, которые подчеркивают индивидуальность каждой клиентки. Для меня важно, чтобы вы чувствовали себя комфортно и были довольны результатом.
          <br /><br />
          Давайте вместе подчеркнем вашу естественную красоту!
        </p>
        <NavLink to="/contacts" className={({ isActive }) =>
          `${styles.button} ${isActive ? styles.active : ''}`
        }>
          Записаться
        </NavLink>
      </motion.div>
    </motion.div>
  );
}