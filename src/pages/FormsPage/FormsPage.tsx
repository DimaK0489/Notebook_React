import { useState } from "react";
import { TopicHeader } from "../../components/TopicHeader/TopicHeader";
import s from "./FormsPage.module.css";
import { controlledCode } from "../../constants/codeExample";
import { ImportantBox } from "../../components/ImportantBox/ImportantBox";
import { DocLink } from "../../components/DocLink/DocLink";

export const FormsPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Отправлено: ${name} (${email})`);
  };

  return (
    <article className={s.container}>
      <TopicHeader
        title="Frorms (формы) в React"
        description="Работа с формами в React основывается на концепции управляемых компонентов, где состояние инпутов хранится в стейте компонента."
      />
      <section className={s.section}>
        <h2 className={s.subtitle}>Управляемые компоненты</h2>
        <div className={s.demoBox}>
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.inputGroupe}>
              <label className={s.labelTitle}>Имя: </label>
              <input
                className={s.input}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите Имя"
              />
            </div>
            <div className={s.inputGroupe}>
              <label className={s.labelTitle}>Email: </label>
              <input
                className={s.input}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите Email"
              />
            </div>
            <button type="submit" className={s.submitBtn}>
              Отправить
            </button>
          </form>
          <div className={s.preview}>
            <strong>Live-превью:</strong>
            <p className={s.titlePreview}>
              Имя: {name || "-"} | Email: {email || "-"}
            </p>
          </div>
        </div>
      </section>
      <section className={s.section}>
        <h2 className={s.subtitle}>Базовый синтаксис</h2>
        <pre className={s.code}>
          <code>{controlledCode}</code>
        </pre>
      </section>
      <ImportantBox title="Formik и сложные формы">
        <div className={s.importantItem}>
          <p>
            📦 Для больших форм с множеством полей и сложной валидацией
            рекомендуется использовать библиотеку <strong>Formik</strong>. Она
            берет на себя управление состоянием, обработку ошибок и сабмит.
          </p>
        </div>
      </ImportantBox>
      <div className={s.formGroupe}>
        <DocLink
          href="https://formik.org/docs/overview"
          title="Документация Formic"
        />
        <DocLink
          href="https://react.dev/reference/react-dom/components/form"
          title="Документация React-form"
        />
      </div>
    </article>
  );
};
