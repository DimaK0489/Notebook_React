import { TopicHeader } from "../../components/TopicHeader/TopicHeader";
import { routerCode } from "../../constants/codeExample";
import s from "./RouterPage.module.css";

export const RouterPage = () => {
  return (
    <article className={s.container}>
      <TopicHeader
        title="React-Router"
        description="Библиотека для организации навигации в React-приложениях. Она позволяет менять URL в строке браузера и синхронизировать его с отображаемыми компонентами БЕЗ ПЕРЕЗАГРУЗКИ страницы. Вместо того, чтобы каждый раз отправлять запрос на сервер и загружать новую страницу, роутинг позволяет динамически обновлять только необходимые компоненты или данные в соответствии с выбранным маршрутом."
      />
      <section className={s.section}>
        <h2 className={s.subtitle}>Основные компоненты</h2>
        <div className={s.componentsGrid}>
          <div className={s.compCard}>
            <span className={s.compTag}>BrowserRouter</span>
            <p>Обертка, которая хранит текущую локацию и историю переходов.</p>
          </div>
          <div className={s.compCard}>
            <span className={s.compTag}>Routes & Route</span>
            <p>Контейнер и правила: «по этому пути отрисуй этот компонент».</p>
          </div>
          <div className={s.compCard}>
            <span className={s.compTag}>Link & NavLink</span>
            <p>Замена тегу &lt;a&gt;. Меняет URL без перезагрузки страницы.</p>
          </div>
        </div>
      </section>
      <section className={s.section}>
        <h2 className={s.subtitle}>Базовый пример</h2>
        <pre className={s.code}>
          <code>{routerCode}</code>
        </pre>
      </section>
    </article>
  );
};
