import React from 'react';
import ImageCard from '../../components/ImageCard/ImageCard';
import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

// импортируем ВСЕ изображения из папки assets
function importAll(r) {
  return r.keys().map((key) => ({
    src: r(key),
    alt: key.replace('./', '').split('.')[0],
  }));
}

const images = importAll(
  require.context('../../assets/portfolio', false, /\.(png|jpe?g|svg)$/i)
);

// параметры анимации для фото
const imgHover = { scale: 1.1, rotate: 2 };
const imgTransition = { type: 'spring', stiffness: 200 };

export default function Portfolio() {
  return (
    <div className={styles.gallery}>
      {images.map((img, index) => (
        <motion.div
          key={index}
          whileHover={imgHover}
          transition={imgTransition}
        >
          <ImageCard src={img.src} alt={img.alt} />
        </motion.div>
      ))}
    </div>
  );
}