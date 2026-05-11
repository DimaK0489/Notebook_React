import { useRef } from "react";
import { ImportantBox } from "../../components/ImportantBox/ImportantBox";
import { TopicHeader } from "../../components/TopicHeader/TopicHeader";
import { fragmentExample, useRefExample } from "../../constants/codeExample";
import s from "./RefFragmentPage.module.css";
import { DocLink } from "../../components/DocLink/DocLink";

export const RefFragmentPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <article className={s.container}>
      <TopicHeader
        title="Использование refs, Fragment, Key"
        description="Технические возможности React для работы с DOM"
      />
      <section className={s.section}>
        <h2 className={s.subtitle}>1. useRef (ссылки)</h2>
        <p className={s.text}>
          Используется для прямого доступа к DOM-узлам или сохранения значений,
          которые не должны вызывать рендер.
        </p>
        <div className={s.demoBox}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Нажми кнопку справа"
            className={s.input}
          />
          <button onClick={focusInput} className={s.btn}>
            Установить фокус
          </button>
        </div>
        <h3 className={s.title}>Пример кода:</h3>
        <div className={s.exampleCode}>
          <pre className={s.code}>
            <code>{useRefExample}</code>
          </pre>
        </div>
      </section>
      <section className={s.section}>
        <h2 className={s.subtitle}>2. Key (ключи)</h2>
        <p className={s.text}>
          Каждый элемент должен иметь уникальный ключ! Ключи (key) помогают
          React определять, какие элементы в списке были изменены, добавлены или
          удалены.
        </p>
        <ImportantBox title="Важное про ключи">
          <div className={s.importantItem}>
            <span className={s.importantIcon}>🛑</span>
            <p>
              <strong>Не используйте index:</strong> Если список может меняться
              (удаление, сортировка), использование индекса массива как ключа
              может привести к ошибкам в состоянии UI. Используйте уникальные
              ID. Так же не рекомендуется использовать сторонние библиотеки типо
              "uuid"!!!
            </p>
          </div>
        </ImportantBox>
      </section>
      <section className={s.section}>
        <h2 className={s.subtitle}>3. Fragment</h2>
        <p className={s.text}>
          <strong>Fragment</strong> позволяет группировать несколько элементов
          без добавления лишнего узла в DOM. Это помогает сохранить структуру
          документа и избежать ненужных div-ов.
        </p>
        <pre className={s.code}>
          <code>{fragmentExample}</code>
        </pre>
      </section>
      <DocLink href="https://react.dev/reference/react/useRef" />
    </article>
  );
};
