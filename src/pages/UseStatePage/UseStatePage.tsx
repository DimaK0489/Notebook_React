import { useState } from "react";
import { DocLink } from "../../components/DocLink/DocLink";
import { ImportantBox } from "../../components/ImportantBox/ImportantBox";
import { TopicHeader } from "../../components/TopicHeader/TopicHeader";
import s from "./UseStatePage.module.css";
import {
  counterExample,
  stateObj,
  stateProps,
} from "../../constants/codeExample";

export const UseStatePage = () => {
  const [count, setCount] = useState<number>(0);

  const decrease = () => setCount((prevNum) => prevNum - 1);
  const increase = () => setCount((prevNum) => prevNum + 1);
  const reset = () => setCount(0);

  return (
    <article className={s.container}>
      <TopicHeader
        title="State (useState)"
        description="State (состояние) — это объект, который хранит данные компонента, способные меняться со временем. Хук useState позволяет добавлять состояние функциональным React-компонентам."
      />
      <section className={s.section}>
        <h2 className={s.subtitle}>Интерактивный пример счетчика</h2>
        <div className={s.demoBox}>
          <p className={s.titleCount}>
            Счётчик сейчас: <span className={s.countValue}>{count}</span>
          </p>
          <div className={s.btnGroup}>
            <button className={s.demoBtn} onClick={increase}>
              Увеличить +
            </button>
            <button className={`${s.demoBtn} ${s.reset}`} onClick={reset}>
              Сброс
            </button>
            <button className={s.demoBtn} onClick={decrease}>
              Уменьшить -
            </button>
          </div>
        </div>
        <section className={s.section}>
          <h2 className={s.subtitle}>Код примера</h2>
          <pre className={s.code}>
            <code>{counterExample}</code>
          </pre>
        </section>
        <section className={s.section}>
          <h2 className={s.subtitle}>
            State можно передавать в дочерние компоненты при помощи props.
          </h2>
          <pre className={s.code}>
            <code>{stateProps}</code>
          </pre>
        </section>
        <ImportantBox title="Примечания">
          <ul>
            <li>
              <strong>Рендеринг компонента</strong> При вызове useState в
              компоненте, он будет выполнен при каждом рендеринге компонента.
            </li>
            <li>
              <strong>
                Использование несколько хуков useState в одном компоненте
              </strong>{" "}
              Нормальная практика чтобы иметь несколько независимых состояний.
            </li>
            <li>
              <strong>Совпадение текущего состояние с новым</strong> Если новое
              значение состояния совпадает с текущим значением, React выполнит
              оптимизацию и не проведет повторную отрисовку компонента.
            </li>
          </ul>
        </ImportantBox>

        <section className={s.sectionObj}>
          <h2 className={s.subtitle}>Использование useState c объектом</h2>
          <pre className={s.code}>
            <code>{stateObj}</code>
          </pre>
        </section>
        <ImportantBox title="Важные моменты">
          <ul>
            <li>
              <strong>Не изменяй существующее состояние напрямую:</strong>{" "}
              Вместо этого создавай новый объект с помощью оператора spread. Это
              позволяет React правильно отслеживать изменения состояния и
              ререндерить компонент при необходимости.
            </li>
          </ul>
          <ul>
            <li>
              <strong>Используй функцию для обновления состояния:</strong> Когда
              новое состояние зависит от предыдущего, всегда! используй функцию
              для обновления, чтобы избежать проблем с конкурентным обновлением
              состояния.
            </li>
          </ul>
        </ImportantBox>
        <ImportantBox title="Функция-setter (например setState) - асинхронная операция!">
          <p className={s.importantText}>
            Когда мы вызываем setState, React не обновляет состояние и не
            рендерит компонент немедленно. Вместо этого он помещает обновление в
            очередь. После этого React применяет все обновления состояния за
            один раз перед следующим рендером компонента.
          </p>

          <div className={s.nestedBox}>
            <h4 className={s.nestedTitle}>
              📢 Асинхронное поведение сеттеров в React позволяет:
            </h4>
            <ul className={s.nestedList}>
              <li>
                <span className={s.emoji}>🐱‍💻</span>
                Объединять несколько обновлений состояния в одно, что уменьшает
                количество рендеров и улучшает производительность (batching).
              </li>
              <li>
                <span className={s.emoji}>🐱‍💻</span>
                Гарантировать, что компоненты рендерятся с наиболее актуальным
                состоянием.
              </li>
            </ul>
          </div>
        </ImportantBox>

        <DocLink
          href="https://react.dev/reference/react/useState"
          title="Документация React-useState"
        />
      </section>
    </article>
  );
};
