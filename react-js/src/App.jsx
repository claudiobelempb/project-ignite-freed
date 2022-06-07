import { useState } from "react";

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import style from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      name: "Cláudio Cardoso",
      avatarUrl: "https://avatars.githubusercontent.com/u/9382100?s=40&v=4",
      role: "Desenvolvedor",
    },
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae doloremque dolorem nihil maiores voluptates. Libero soluta expedita, quidem corporis atque praesentium itaque numquam qui neque eveniet alias suscipit consequuntur quis.",
    publisheDate: new Date("2022-08-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      name: "Kaike Cardoso",
      avatarUrl: "https://avatars.githubusercontent.com/u/9382100?s=40&v=4",
      role: "Desenvolvedor",
    },
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae doloremque dolorem nihil maiores voluptates. Libero soluta expedita, quidem corporis atque praesentium itaque numquam qui neque eveniet alias suscipit consequuntur quis.",
    publisheDate: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      name: "Kevin Cardoso",
      avatarUrl: "https://avatars.githubusercontent.com/u/9382100?s=40&v=4",
      role: "Desenvolvedor",
    },
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae doloremque dolorem nihil maiores voluptates. Libero soluta expedita, quidem corporis atque praesentium itaque numquam qui neque eveniet alias suscipit consequuntur quis.",
    publisheDate: new Date("2022-05-02 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <main className={style.wrapper}>
        <Sidebar />
        <section>
          {posts.map((post, index) => (
            <Post
              key={index}
              name={post.author.name}
              avatarUrl={post.author.avatarUrl}
              role={post.author.role}
              publisheDate={post.publisheDate}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
