import { DocLink } from "../../components/DocLink/DocLink";
import { ImportantBox } from "../../components/ImportantBox/ImportantBox";
import { TopicHeader } from "../../components/TopicHeader/TopicHeader";
import { contextCode } from "../../constants/codeExample";
import s from "./ContextPage.module.css";

export const ContextPage = () => {
  return (
    <article className={s.container}>
      <TopicHeader
        title="Context (useContext)"
        description="Контекст позволяет передавать данные через дерево компонентов без необходимости передавать пропсы на промежуточных уровнях."
      />
      <section className={s.section}>
        <h2 className={s.subtitle}>Зачем нужен Context?</h2>
        <div className={s.visualBox}>
          <div className={s.diagram}>
            <div className={s.diagramColumn}>
              <span className={s.badge}>Без Context</span>
              <div className={s.treeLine}>Parent ➔ Child ➔ Grandchild</div>
              <small>(Prop Drilling)</small>
              <p className={s.description}>
                Данные (props) нужно прокидывать от <strong>Родителя</strong> к{" "}
                <strong>Дочерним</strong> через всю вложенность.
              </p>
            </div>
            <div className={s.arrow}>VS</div>
            <div className={s.diagramColumn}>
              <span className={`${s.badge} ${s.badgeBlue}`}>С Context</span>
              <div className={s.treeLine}>Parent ────────▶ Grandchild</div>
              <small>(Прямой доступ)</small>
              <p className={s.description}>
                <strong>Context</strong> решает проблему прокидывания (props)
                через всю вложенность.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={s.section}>
        <h2 className={s.subtitle}>Этапы работы</h2>
        <pre className={s.code}>
          <code>{contextCode}</code>
        </pre>
      </section>
      <ImportantBox title="Когда использовать Context">
        <div className={s.importantItem}>
          <h3 className={s.importantTitle}>
            Злоупотребление контекстом может привести к проблемам с
            производительностью!
          </h3>
          <p>
            Контекст идеален для <strong>глобальных данных</strong>: текущий
            пользователь, тема оформления (light/dark), настройки языка или
            корзина покупок.
          </p>
          <p>
            <strong>Минус:</strong> Изменение значения в Provider вызывает
            перерендер <strong>всех</strong> потребителей (consumers) этого
            контекста. Не используйте его для очень часто меняющихся данных.
          </p>
        </div>
      </ImportantBox>
      <DocLink href="https://react.dev/reference/react/useContext" />
    </article>
  );
};
