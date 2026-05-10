import { DocLink } from "../../components/DocLink/DocLink";
import { ImportantBox } from "../../components/ImportantBox/ImportantBox";
import { TopicHeader } from "../../components/TopicHeader/TopicHeader";
import {
  accessProps,
  destructuringProps,
  transferProps,
} from "../../constants/codeExample";
import s from "./PropsPage.module.css";

export const PropsPage = () => {
  return (
    <article className={s.container}>
      <TopicHeader
        title="Props - что это и для чего?"
        description={
          <>
            <strong>Props</strong> - это входные данные, передаваемые в
            компонент для настройки его поведения и внешнего вида.
          </>
        }
      />
      <section className={s.section}>
        <h2 className={s.title}>Передача props</h2>
        <div className={s.example}>
          <pre className={s.code}>
            <code>{transferProps}</code>
          </pre>
        </div>
        <h2 className={s.title}>Доступ к props</h2>
        <div className={s.example}>
          <pre className={s.code}>
            <code>{accessProps}</code>
          </pre>
        </div>
        <h2 className={s.title}>Деструктуризация props</h2>
        <pre className={s.code}>
          <code>{destructuringProps}</code>
        </pre>
      </section>
      <ImportantBox title="Итого">
        <ul className={s.list}>
          <li className={s.li}>
            <strong>Главная особенность!!!</strong> Props immutable, их нельзя
            изменить на прямую!!!
          </li>

          <li>
            <strong>Что такое Props? </strong> Props - это объекты, которые
            передаются в компоненты как параметры. Они используются для передачи
            данных из родительского компонента в дочерний.
          </li>
          <li>
            <strong>Какие типы данных можно передать Props? </strong> - Любые,
            примитивы, массивы, объекты, массив объектов.
          </li>
          <li>
            <strong> Как передавать props в компоненты? </strong>Props можно
            передавать в компоненты как атрибуты. В родительском компоненте
            нужно указать имя атрибута и значение, которое будет передано в
            дочерний компонент.
          </li>
          <li>
            <strong>Как читать props в компоненте? </strong>Props можно читать в
            компоненте через объект props. Этот объект содержит все переданные в
            компонент атрибуты.
          </li>
          <li>
            <strong>Как изменить данные в дочернем компоненте?</strong>
            Следует использовать состояние (state).
          </li>
        </ul>
      </ImportantBox>
      <DocLink
        href="https://react.dev/learn/passing-props-to-a-component"
        title="Документация React-Props"
      />
    </article>
  );
};
