import { ImportantBox } from "../../components/ImportantBox/ImportantBox";
import { TopicHeader } from "../../components/TopicHeader/TopicHeader";
import { hocExample } from "../../constants/codeExample";
import s from "./HocPage.module.css";

export const HocPage = () => {
  return (
    <article className={s.container}>
      <TopicHeader
        title="HOC (Higher-Order Components)"
        description="Компонент высшего порядка - это функция, которая принимает компонент и возвращает новый, измененный компонент."
      />
      <section className={s.section}>
        <h2 className={s.subtitle}>Для чего использовать HOC?</h2>
        <p className={s.text}>
          <span className={s.accent}>HOC</span> используется для добавления
          функциональности к компонентам без изменения их кода. Например, вы
          можете создать HOC для управления состоянием, получения данных или
          реализации логики маршрутизации.
        </p>
      </section>

      <section className={s.section}>
        <h2 className={s.subtitle}>Пример: Защита маршрутов (withAuth)</h2>
        <pre className={s.code}>
          <code>{hocExample}</code>
        </pre>
      </section>

      <ImportantBox title="Современный контекст: Хуки vs HOC">
        <div className={s.importantItem}>
          <ul>
            <li className={s.text}>
              В современном коде React (версии 16.8+) большинство задач, которые
              раньше решались с помощью HOC, теперь гораздо проще решать через{" "}
              <strong>Кастомные Хуки (Custom Hooks)</strong>.
            </li>
            <li className={s.text}>
              <strong>Почему хуки вытесняют HOC:</strong> Хуки не создают лишней
              вложенности в React, DevTools и их легче типизировать в
              TypeScript.
            </li>
          </ul>
        </div>
      </ImportantBox>
    </article>
  );
};
