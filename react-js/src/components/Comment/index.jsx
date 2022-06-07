import styles from "./Comment.module.css";

import { FaRegTrashAlt, FaThumbsUp } from "react-icons/fa";
import ImageProfile from "../../assets/image/profile1.svg";
import { useState } from "react";

const Comment = ({ content, onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleNewLike = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };

  return (
    <>
      <div className={styles.comment__container}>
        <img src={ImageProfile} alt="" />
        <div className={styles.comment__header}>
          <div className={styles.comment__content}>
            <header>
              <div className={styles.content__title}>
                <strong>Devon Lane </strong>
                <span>(você)</span>
                <div className={styles.comment__subtitle}>Cerca de 2h</div>
                <p>{content}</p>
              </div>

              <button
                onClick={handleDeleteComment}
                className={styles.comment__btn_delete}
              >
                <FaRegTrashAlt />
              </button>
            </header>
          </div>
          <div className={styles.comment__like}>
            <button
              onClick={handleNewLike}
              className={styles.comment__btn_like}
            >
              <FaThumbsUp /> Aplaudir • {likeCount}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Comment };
