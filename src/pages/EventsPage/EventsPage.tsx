import { useState } from "react";
import { TopicHeader } from "../../components/TopicHeader/TopicHeader";
import s from "./EventsPage.module.css";
import { ImportantBox } from "../../components/ImportantBox/ImportantBox";
import { DocLink } from "../../components/DocLink/DocLink";

export const EventsPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [pressedKey, setPressedKey] = useState<string>("");
  const [blurText, setBlurText] = useState("");
  const [error, setError] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert(`Клик зафиксирован! Тип события: ${e.type}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Форма отправлена! Данные: ${inputValue}`);
  };

  const handleBlur = () => {
    if (blurText.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <article className={s.container}>
      <TopicHeader
        title="Events, как его использовать."
        description="React позволяет легко обрабатывать взаимодействия с пользователем, 
        такие как клики, ввод текста, отправка форм и перемещение мыши."
      />
      <section className={s.section}>
        <h2 className={s.subtitle}>Интерактивные примеры</h2>
        <div className={s.grid}>
          <div className={s.demoBox}>
            <h3 className={s.titleCard}>onClick</h3>
            <button className={s.mainBtn} onClick={handleClick}>
              Проверить onClick
            </button>
            <p className={s.text}>
              Нажми на кнопку, чтобы увидеть работу обработчика
            </p>
          </div>
          <div className={s.demoBox}>
            <h3 className={s.titleCard}>onChange</h3>
            <p className={s.text}>Ввод текста</p>
            <input
              type="text"
              placeholder="Печатай тут..."
              className={s.input}
              onChange={handleChange}
            />
            <div className={s.result}>
              Значение: <span>{inputValue}</span>
            </div>
          </div>
          <div className={s.demoBox}>
            <h3 className={s.titleCard}>onMouseOver</h3>
            <p className={s.text}>Реакция на наведение курсора</p>
            <div
              className={`${s.hoverBox} ${isHovered ? s.hovered : ""}`}
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
            >
              {isHovered ? "Убери курсор! 😲" : "Наведи на меня"}
            </div>
          </div>
          <div className={s.demoBox}>
            <h3 className={s.titleCard}>onKeyDown</h3>
            <p className={s.text}>Определение нажатой клавиши</p>
            <input
              type="text"
              placeholder="Нажми любую клавишу..."
              className={s.input}
              onKeyDown={(e) => setPressedKey(e.key)}
            />
            <div className={s.result}>
              Нажато: <kbd className={s.kbd}>{pressedKey || "—"}</kbd>
            </div>
          </div>
          <div className={s.demoBox}>
            <h3 className={s.titleCard}>onSubmit</h3>
            <p className={s.text}>Обработка отправки формы</p>
            <form onSubmit={handleFormSubmit} className={s.form}>
              <button type="submit" className={s.mainBtn}>
                Отправить форму
              </button>
            </form>
            <p className={s.smallPrint}>* Использует e.preventDefault()</p>
          </div>
          <div className={s.demoBox}>
            <h3 className={s.titleCard}>onBlur</h3>
            <p className={s.text}>Срабатывает при потере фокуса</p>
            <input
              type="text"
              placeholder="Оставь меня пустым и кликни мимо..."
              className={`${s.input} ${error ? s.inputError : ""}`}
              value={blurText}
              onChange={(e) => setBlurText(e.target.value)}
              onBlur={handleBlur}
            />
            {error && (
              <div className={s.errorMessage}>
                ⚠️ Поле не должно быть пустым!
              </div>
            )}
            {!error && blurText && (
              <div className={s.successMessage}>✅ Отлично!</div>
            )}
          </div>
        </div>
      </section>
      <ImportantBox title="Важно помнить">
        <div className={s.importantItem}>
          <span>🛑</span>
          <p>
            В <strong>onSubmit</strong> всегда вызывайте{" "}
            <code>e.preventDefault()</code>, иначе страница перезагрузится, и вы
            потеряете состояние приложения.
            <br />В React, параметр <strong>event</strong> в callback-функции
            представляет объект события, который генерируется при изменении
            значения элемента формы или компонента.{" "}
            <strong>event.target.value</strong> содержит текущее значение input
            элемента.
          </p>
        </div>
      </ImportantBox>
      <DocLink
        href="https://react.dev/learn/responding-to-events"
        title="Документация React-Events"
      />
    </article>
  );
};
