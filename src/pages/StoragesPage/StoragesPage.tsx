import { useEffect, useState } from "react";
import { TopicHeader } from "../../components/TopicHeader/TopicHeader";
import s from "./StoragesPage.module.css";
import { ImportantBox } from "../../components/ImportantBox/ImportantBox";
import { storageCode } from "../../constants/codeExample";
import { DocLink } from "../../components/DocLink/DocLink";

export const StoragesPage = () => {
  const [localValue, setLocalValue] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("demo_key");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved) setLocalValue(saved);
  }, []);

  const handleSave = () => {
    localStorage.setItem("demo_key", localValue);
    alert(`~${localValue}~ Сохранено в LocalStorage!`);
  };
  const handleClear = () => {
    localStorage.removeItem("demo_key");
    setLocalValue("");
    alert("LocalStorage очищен!");
  };
  return (
    <article className={s.container}>
      <TopicHeader
        title="Storages (хранилище данных)"
        description="Механизмы хранения данных на стороне клиента позволяют сохранять состояние приложения, настройки пользователя и токены авторизации даже после закрытия вкладки."
      />
      <section className={s.section}>
        <h2 className={s.subtitle}>Сравнение хранилищ</h2>
        <div className={s.grid}>
          <div className={s.card}>
            <span className={s.tag}>LocalStorage</span>
            <p className={s.description}>
              Хранит данные бессрочно, даже после закрытия браузера. Объем до
              5-10 МБ.
            </p>
          </div>
          <div className={s.card}>
            <span className={s.tag}>SessionStorage</span>
            <p className={s.description}>
              Данные удаляются при закрытии вкладки. Полезно для временных форм.
            </p>
          </div>
          <div className={s.card}>
            <span className={`${s.tag} ${s.cookieTag}`}>Cookies</span>
            <p className={s.description}>
              Небольшой объем (4 КБ). Могут отправляться на сервер с каждым
              запросом.
            </p>
          </div>
        </div>
      </section>
      <section className={s.section}>
        <h2 className={s.subtitle}>Интерактив: LocalStorage</h2>
        <div className={s.demoBox}>
          <input
            type="text"
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
            className={s.input}
            placeholder="Введите что-нибудь..."
          />
          <button onClick={handleSave} className={s.saveBtn}>
            Сохранить
          </button>
          <button onClick={handleClear} className={s.clearBtn}>
            Очистить
          </button>
          <p className={s.hint}>
            Попробуй обновить страницу — текст останется!
          </p>
        </div>
      </section>
      <section className={s.section}>
        <h2 className={s.subtitle}>
          Основные методы для работа с LocalStorage
        </h2>
        <pre className={s.code}>
          <code>{storageCode}</code>
        </pre>
      </section>

      <ImportantBox title="Безопасность (XSS)">
        <div className={s.importantItem}>
          <span className={s.importantIcon}>🛑</span>
          <p>
            Никогда не храните <strong>чувствительные данные</strong> (пароли,
            личные данные) в LocalStorage. Злоумышленники могут украсть их через
            XSS-атаки. Для токенов авторизации лучше использовать{" "}
            <strong>HttpOnly Cookies</strong>.
          </p>
        </div>
      </ImportantBox>
      <DocLink
        href="https://learn.javascript.ru/localstorage"
        title="Документация Storage"
      />
    </article>
  );
};
