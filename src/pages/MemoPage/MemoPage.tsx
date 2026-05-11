import { useMemo, useState } from "react";
import { TopicHeader } from "../../components/TopicHeader/TopicHeader";
import s from "./MemoPage.module.css";
import { ImportantBox } from "../../components/ImportantBox/ImportantBox";
import { memoExample1, memoExample2 } from "../../constants/codeExample";

export const MemoPage = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState("");

  const expensiveValue = useMemo(() => {
    console.log("🔥 Тяжелое вычисление...");
    return count * 1000;
  }, [count]);

  return (
    <article className={s.container}>
      <TopicHeader
        title="React.memo & useMemo"
        description="Инструменты мемоизации в React позволяют избежать лишних вычислений и перерисовок, сохраняя результат в памяти между рендерами."
      />
      <section className={s.section}>
        <h2 className={s.subtitle}>1. useMemo (Мемоизация значений)</h2>
        <div className={s.demoBox}>
          <p>
            Счётчик: <strong>{count}</strong> | Результат ×1000:{" "}
            <strong>{expensiveValue}</strong>
          </p>
          <div className={s.btnGroup}>
            <button onClick={() => setCount((c) => c + 1)} className={s.btn}>
              Изменить число
            </button>
            <input
              type="text"
              placeholder="Пиши тут, вычисление не сработает..."
              onChange={(e) => setText(e.target.value)}
              className={s.input}
            />
          </div>
          <p className={s.hint}>
            Открой консоль: вычисление срабатывает по клику на кнопку "Изменить
            число".
          </p>
        </div>
      </section>
      <ImportantBox title="Ключевой момент использования">
        <div className={s.importantItem}>
          <p className={s.text}>
            <span className={s.importantSpan}>useMemo - это хук,</span> который
            позволяет запоминать результат вычисления значения. Он будет
            пересчитывать закэшированное значение только тогда, когда изменятся
            указанные зависимости. Это помогает избежать ненужных перерасчетов в
            функции или вычислениях, которые могут быть дорогими по
            производительности.
          </p>
        </div>
      </ImportantBox>

      <section className={s.section}>
        <h2 className={s.subtitle}>2. React.memo (Мемоизация компонентов)</h2>
        <div className={s.codeWrapper}>
          <pre className={s.code}>
            <code>{memoExample1}</code>
          </pre>
        </div>
      </section>
      <ImportantBox title="Важная особенность">
        <div className={s.importantItem}>
          <p className={s.text}>
            <span className={s.importantSpan}> React.memo</span> это
            функциональный компонент, который предотвращает повторный рендеринг
            компонента, если его props не изменились. Это полезно для
            оптимизации функциональных компонентов, которые не зависят от
            состояния и контекста.
          </p>
          {/* <p className={s.text}>
            <strong>2. </strong>
            <span className={s.importantSpan}>
              {" "}
              В React.memo можно использовать второй параметр — функцию
              сравнения.
            </span>{" "}
            это функциональный компонент, который предотвращает повторный
            рендеринг компонента, если его props не изменились. Это полезно для
            оптимизации функциональных компонентов, которые не зависят от
            состояния и контекста.
          </p> */}
        </div>
      </ImportantBox>
      <section className={s.section}>
        <h2 className={s.subtitle}>
          В React.memo можно использовать второй параметр — функцию сравнения.
        </h2>
        <div className={s.codeWrapper}>
          <pre className={s.code}>
            <code>{memoExample2}</code>
          </pre>
        </div>
      </section>
      <ImportantBox title="Функция сравнения React-memo">
        <div className={s.importantItem}>
          <p className={s.text}>
            <strong>2. </strong>
            <span className={s.importantSpan}>
              {" "}
              В React.memo можно использовать второй параметр — функцию
              сравнения.
            </span>{" "}
            это функциональный компонент, который предотвращает повторный
            рендеринг компонента, если его props не изменились. Это полезно для
            оптимизации функциональных компонентов, которые не зависят от
            состояния и контекста.
          </p>
        </div>
      </ImportantBox>
    </article>
  );
};
