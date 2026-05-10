import { useState } from "react";
import { TopicHeader } from "../../components/TopicHeader/TopicHeader";
import { useEffectExample } from "../../constants/codeExample";
import s from "./LifeCyclePage.module.css";
import { EffectBox } from "../../components/EffectBox/EffectBox";
import { ImportantBox } from "../../components/ImportantBox/ImportantBox";
import { DocLink } from "../../components/DocLink/DocLink";

export const LifeCyclePage = () => {
  const [show, setShow] = useState<boolean>(false);

  const changeShow = () => setShow(!show);

  return (
    <article className={s.container}>
      <TopicHeader
        title="Жизненный цикл компонентов LifiCycle (useEffect)"
        description="Хук useEffect позволяет выполнять побочные эффекты (side effects) в функциональных компонентах. Это могут быть запросы к API, подписки, таймеры или прямое изменение DOM."
      />
      <section className={s.section}>
        <h2 className={s.subtitle}>Три режима работы</h2>
        <div className={s.grid}>
          <div className={s.card}>
            <h4>Без массива зависимостей</h4>
            <code>useEffect(() =&gt; {"{...}"})</code>
            <p>
              Запускается при <strong>каждом</strong> рендере.
            </p>
          </div>
          <div className={s.card}>
            <h4>Пустой массив []</h4>
            <code>useEffect(() =&gt; {"{...}"}, [])</code>
            <p>
              Запускается <strong>один раз</strong> при монтировании (Mount).
            </p>
          </div>
          <div className={s.card}>
            <h4>С зависимостями [id]</h4>
            <code>useEffect(() =&gt; {"{...}"}, [id])</code>
            <p>
              Запускается при <strong>изменении</strong> значения id.
            </p>
          </div>
        </div>
      </section>
      <section className={s.section}>
        <h2 className={s.subtitle}>Пример кода</h2>
        <pre className={s.code}>
          <code>{useEffectExample}</code>
        </pre>
      </section>
      <section className={s.section}>
        <h2 className={s.subtitle}>Интерактивная пример</h2>
        <div className={s.demoContainer}>
          <button className={s.btn} onClick={changeShow}>
            {show
              ? "Удалить компонент (Unmount)"
              : "Монтировать компонент (Mount)"}
          </button>

          {show && <EffectBox />}
        </div>
      </section>
      <ImportantBox title="Важноя особенность Хука useEffect">
        <div className={s.item}>
          <p>
            Сработает <strong>не во время отрисовки</strong> интерфейса, а после
            неё или при изменении определённых данных. В этот момент можно
            отобразить компонент загрузки до получения данных.
          </p>
        </div>
      </ImportantBox>
      <DocLink
        href="https://react.dev/reference/react/useEffect"
        title="Документация React-useEffect"
      />
    </article>
  );
};
