import React from "react";
import IgniteLogo from "../../assets/image/ignite_logo.svg";

import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header__container}>
      <img src={IgniteLogo} alt="" />
      <strong>Ignite Feed</strong>
    </header>
  );
};

export { Header };
