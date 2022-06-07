import style from "./Sidebar.module.css";
import { FaPen } from "react-icons/fa";

import ImageSidebar from "../../assets/image/sidebar.svg";

import ImageProfile from "../../assets/image/profile1.svg";
const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <img className={style.cover} src={ImageSidebar} alt="" />
      <div className={style.profile}>
        <img src={ImageProfile} alt="" />
        <strong>Leslie Alexander</strong>
        <span>UI Designer</span>
      </div>

      <footer className={style.footer}>
        <a href="#">
          <FaPen />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export { Sidebar };
