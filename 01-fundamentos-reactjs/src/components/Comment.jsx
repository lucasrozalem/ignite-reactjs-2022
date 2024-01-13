import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

// export function Comment(props) {
//   return (
//     <div className={styles.comment}>
//       <img src={props.author.avatar} alt={props.author.name} />
//       <p>
//         <strong>{props.author.name}</strong>
//         {props.content}
//       </p>
//     </div>
//   );
// }
export function Comment(props) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lucasrozalem.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Rozalem</strong>
              <time title="11 de Maio ás 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabens!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
