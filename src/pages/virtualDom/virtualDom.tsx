import { DocLink } from "../../components/DocLink/DocLink";
import s from "./virtualDom.module.css";

export const VirtualDom = () => {
  return (
    <article className={s.container}>
      <h1 className={s.title}>🏠 Virtual DOM</h1>
      <p className={s.text}>
        <strong className={s.accent}>Что такое Virtual DOM</strong> - это
        концепция программирования, в которой «виртуальное» представление
        пользовательского интерфейса сохраняется в памяти и синхронизируется с
        «настоящим» DOM при помощи библиотеки (например, ReactDOM).
      </p>

      <section className={s.content}>
        <h2 className={s.subtitle}>Как работает Vitual DOM?</h2>
        <div className={s.steps}>
          <div className={s.step}>
            <p className={s.text}>
              <strong className={s.accent}>Рендеринг: </strong>При изменении
              данных React создает новое виртуальное дерево компонентов.
            </p>
          </div>
          <div className={s.step}>
            <p className={s.text}>
              <strong className={s.accent}>Diffing: </strong> React сравнивает
              новое виртуальное дерево с предыдущим (алгоритм сравнения).
            </p>
          </div>
          <div className={s.step}>
            <p className={s.text}>
              <strong className={s.accent}>Синхронизация: </strong> React
              вычисляет минимально необходимое количество изменений и обновляет
              только нужные узлы в реальном DOM.
            </p>
          </div>
        </div>
      </section>
      <section className={s.infoBox}>
        <p className={s.text}>
          Этот процесс называется{" "}
          <strong className={s.accent}>Reconciliation</strong> (согласование).
          Благодаря ему React работает быстро, так как манипуляции с реальным
          DOM — самая дорогая операция в браузере.
        </p>
      </section>
      <DocLink
        href="https://ru.legacy.reactjs.org/docs/faq-internals.html"
        title="Documentation Virtual DOM"
      />
    </article>
  );
};
