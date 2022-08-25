import React from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ img, title, rank, description }) => {
  return (
    <article className={styles.container}>
      <img src={img} alt="" />
      <div className={styles.info}>
        <h1>{title}</h1>
        <p>{rank}</p>
      </div>
      <div className={styles.overlay}>
        <main>
          <p>{description}</p>
        </main>
      </div>
    </article>
  );
};

export default MovieCard;
