/* eslint-disable react/no-unknown-property */
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/lucasrozalem.png"
          />
          <div className={styles.authorInfo}>
            <strong>Lucas Rozalem</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio ás 08:13h" dataTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p> Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            👉<a href="#"> jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#"> #novoprojeto #nlw #rocketseat</a>
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong> Deixei seu feedback</strong>
        <textarea placeholder="Comente algo sobre esse post" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
