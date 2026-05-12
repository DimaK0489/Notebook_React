import { DocLink } from "../../components/DocLink/DocLink";
import { ImportantBox } from "../../components/ImportantBox/ImportantBox";
import { TopicHeader } from "../../components/TopicHeader/TopicHeader";
import { classCode, functionalCode } from "../../constants/codeExample";
import s from "./ComponentsPage.module.css";

export const ComponentsPage = () => {
  return (
    <article className={s.container}>
      <TopicHeader
        title="Компоненты"
        description={
          <>
            <strong>Компонент</strong> - это функция, потому что она получает
            данные в одном объекте («пропсы») в качестве параметра и возвращает
            React-элемент. Существуют классовые и функциональные компоненты.
          </>
        }
      />
      <section className={s.section}>
        <h2 className={s.subtitle}>Функциональные и классовые компоненты</h2>
        <div className={s.example}>
          <h3>Функциональный (современный подход):</h3>
          <pre className={s.code}>
            <code>{functionalCode}</code>
          </pre>
        </div>
        <div className={s.example}>
          <h3>Классовый (устаревший подход):</h3>
          <pre className={s.code}>
            <code>{classCode}</code>
          </pre>
        </div>
      </section>

      <ImportantBox>
        <ul className={s.list}>
          <li>
            <strong>Имя с заглавной буквы:</strong> React рассматривает
            компоненты, начинающиеся с маленькой буквы, как обычные DOM-теги
            (например, div или span).
          </li>
          <li>
            <strong>Чистота функций:</strong> Компонент не должен изменять свои
            пропсы — он должен возвращать один и тот же результат для одних и
            тех же входных данных.
          </li>
          <li>
            <strong>Единственный корень:</strong> Компонент должен возвращать
            только один родительский элемент (или фрагмент{" "}
            <code>&lt;&gt;...&lt;/&gt;</code>).
          </li>
        </ul>
      </ImportantBox>
      <DocLink
        href="https://ru.legacy.reactjs.org/docs/components-and-props.html"
        title="Документация React-components"
      />
    </article>
  );
};
