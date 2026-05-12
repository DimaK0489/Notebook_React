import { useCallback, useState } from "react";
import { TopicHeader } from "../../components/TopicHeader/TopicHeader";
import s from "./UseCallbackPage.module.css";
import { useCallbackCode } from "../../constants/codeExample";
import { ImportantBox } from "../../components/ImportantBox/ImportantBox";
import { DocLink } from "../../components/DocLink/DocLink";

export const UseCallbackPage = () => {
  const [count, setCount] = useState<number>(0);
  const [other, setOther] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]);

  return (
    <article className={s.container}>
      <TopicHeader
        title="useCallback (Хук)"
        description="Хук useCallback в React позволяет оптимизировать производительность компонента, предотвращая создание новых функций при каждом рендере. Это особенно полезно, когда функции передаются как пропсы дочерним компонентам или используются в зависимостях других хуков, таких как useEffect."
      />
      <section className={s.section}>
        <h2 className={s.subtitle}>Интерактивный пример</h2>
        <div className={s.demoBox}>
          <div className={s.stat}>
            Счетчик (с useCallback): <strong>{count}</strong>
          </div>
          <div className={s.btnGroup}>
            <button onClick={increment} className={s.btn}>
              Увеличить счетчик
            </button>
            <button
              onClick={() => setOther((o) => o + 1)}
              className={s.btnLight}
            >
              Рендер родителя ({other})
            </button>
          </div>
          <p className={s.hint}>
            При "Рендере родителя" функция increment остается прежней.
          </p>
        </div>
      </section>
      <section className={s.section}>
        <h2 className={s.subtitle}>
          Пример использования useCallback с обоими параметрами
        </h2>
        <pre className={s.code}>
          <code>{useCallbackCode}</code>
        </pre>
        <p className={s.text}>
          В этом примере useCallback создает мемоизированную версию функции
          doSomething, и эта версия будет обновляться только в случае изменения
          значений <strong>a</strong> или <strong>b</strong>. Если{" "}
          <strong>a</strong> и <strong>b</strong> не изменятся между рендерами
          компонента, то useCallback вернет ту же самую мемоизированную функцию.
        </p>
      </section>
      <ImportantBox title="Когда использовать useCallback">
        <ul>
          <li>
            Производительность: Используйте useCallback, когда передаете функции
            в дочерние компоненты, которые используют React.memo, чтобы избежать
            лишних рендеров.
          </li>
          <li>
            Зависимости хука: Используйте useCallback для функций, которые
            используются в массиве зависимостей других хуков, таких как
            useEffect или useMemo, чтобы избежать ненужных вызовов этих хуков.
          </li>
          <li>
            Состояние и управление событиями: Если функция зависит от какой-либо
            переменной состояния и вам необходимо, чтобы она не пересоздавалась,
            когда это состояние не меняется.
          </li>
        </ul>
      </ImportantBox>
      <ImportantBox title="Важное отличие useCallback vs useMemo">
        <div className={s.importantItem}>
          <span className={s.importantIcon}>📌</span>
          <div>
            <p>
              <strong>useMemo</strong> — запоминает <strong>результат</strong>{" "}
              выполнения функции (число, массив, объект).
            </p>
            <p>
              <strong>useCallback</strong> — запоминает{" "}
              <strong>саму функцию</strong>.
            </p>
          </div>
        </div>
      </ImportantBox>
      <DocLink href={"https://react.dev/reference/react/useCallback"} />
    </article>
  );
};
