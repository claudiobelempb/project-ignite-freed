import { useState } from "react";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import styles from "./Post.module.css";

import { Comment } from "../Comment";

const Post = ({ name, avatarUrl, role, publisheDate }) => {
  const [comments, setComments] = useState(["Post muito bacana, hein?"]);
  const [newCommentInput, setNewCommentInput] = useState("");

  const dateFormatted = format(publisheDate, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });
  const publisheDateToNow = formatDistanceToNow(publisheDate, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (event) => {
    event.preventDefault();
    setComments([...comments, newCommentInput]);
    setNewCommentInput("");
    console.log("Comments: ", comments);
  };

  const handleNewCommentChange = (event) => {
    event.target.setCustomValidity("");
    setNewCommentInput(event.target.value);
  };

  const deleteComment = (commentToDelete) => {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  };

  const handleNewCommentInvalid = () => {
    event.target.setCustomValidity("Esse campo é obrigratório!");
  };

  const isNewCommentEmpty = newCommentInput.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.post__header}>
          <img src={avatarUrl} alt="" />
          <div className={styles.post__title}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
        <div className={styles.post__public}>
          <time title={dateFormatted} dateTime={publisheDate.toISOString()}>
            {publisheDateToNow}
          </time>
        </div>
      </header>
      <div className={styles.post__content}>
        <h2>Fala galeraa 👋</h2>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <a href="#"> 👉 jane.design/doctorcare</a>
        <div className={styles.post__content_social}>
          <a href="#">#novoprojeto</a>

          <a href="#">#nlw</a>

          <a href="#">#rocketseat</a>
        </div>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.post__form}>
        <h3>Deixe seu feedback</h3>
        <textarea
          onChange={handleNewCommentChange}
          placeholder="Escreva um comentário..."
          name="comment"
          value={newCommentInput}
          onInvalid={handleNewCommentInvalid}
          required
        ></textarea>
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      {comments.map((comment, index) => (
        <Comment
          key={index}
          content={comment}
          onDeleteComment={deleteComment}
        />
      ))}
    </article>
  );
};

export { Post };
