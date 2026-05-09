import s from "./ImportantBox.module.css";
import React from "react";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const ImportantBox = ({
  children,
  title = "Это важно знать",
}: Props) => {
  return (
    <section className={s.box}>
      <div className={s.header}>
        <span className={s.icon}>⚠️</span>
        <h3 className={s.title}>{title}</h3>
      </div>
      <div className={s.content}>{children}</div>
    </section>
  );
};
