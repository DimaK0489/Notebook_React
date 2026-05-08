import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.header__title}>React Notebook</h1>
    </header>
  );
};
