import s from "./AboutApp.module.css";

export const AboutApp = () => {
  return (
    <section className={s.container}>
      <p className={s.description}>
        <span className={s.highlight}>React notebook</span> — это небольшое
        приложение, разработанное с использованием библиотеки React,
        предназначенное для создания интерактивного конспекта по основным темам
        и концепциям React.
      </p>

      <h2 className={s.subtitle}>Основные инструменты проекта</h2>

      <ul className={s.list}>
        <li className={s.listItem}>
          <span className={s.emoji}>🥳</span>
          <p>
            <strong>React и react-dom:</strong> Ключевые библиотеки для создания
            интерфейсов.
          </p>
        </li>
        <li className={s.listItem}>
          <span className={s.emoji}>🥳</span>
          <p>
            <strong>React-router-dom:</strong> Библиотека для организации
            маршрутизации.
          </p>
        </li>
        <li className={s.listItem}>
          <span className={s.emoji}>🥳</span>
          <p>
            <strong>Vite:</strong> Сборщик, обеспечивающий высокую скорость
            разработки.
          </p>
        </li>
        <li className={s.listItem}>
          <span className={s.emoji}>🥳</span>
          <p>
            <strong>TypeScript:</strong> Надмножество JavaScript для статической
            типизации.
          </p>
        </li>
      </ul>
    </section>
  );
};
