// src/components/ImageCard/ImageCard.jsx
import styles from './ImageCard.module.css';

export default function ImageCard({ src, alt }) {
  const isCover = alt.toLowerCase().includes('brovi1');

  return (
    <div className={styles.card}>
      <img
        src={src}
        alt={alt}
        className={`${styles.image} ${isCover ? styles.cover : ''}`}
      />
    </div>
  );
}
