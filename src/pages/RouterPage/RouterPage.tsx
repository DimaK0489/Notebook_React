import { DocLink } from "../../components/DocLink/DocLink";
import { TopicHeader } from "../../components/TopicHeader/TopicHeader";
import {
  routerCode,
  useLocationCode,
  useNavigateCode,
  useParamsCode,
  useRoutes,
  useSearchParamsCode,
} from "../../constants/codeExample";
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
          <div className={s.compCard}>
            <span className={s.compTag}>Outlet</span>
            <p>Используется для рендеринга вложенных маршрутов.</p>
          </div>
        </div>
      </section>
      <section className={s.section}>
        <h2 className={s.subtitle}>Базовый пример</h2>
        <pre className={s.code}>
          <code>{routerCode}</code>
        </pre>
      </section>
      <section className={s.section}>
        <h2 className={s.subtitle}>Основные хуки</h2>
        <div className={s.hooksWrapper}>
          <div className={s.hookItem}>
            <span className={s.hookName}>useParams:</span>
            <p className={s.hookDescription}>
              Используется для извлечения параметров URL в компонентах
              маршрутов.
            </p>
            <pre className={s.code}>
              <code>{useParamsCode}</code>
            </pre>
          </div>
          <div className={s.hookItem}>
            <span className={s.hookName}>useNavigate:</span>
            <p className={s.hookDescription}>
              Позволяет программно изменять маршрут (например, после отправки
              формы).
            </p>
            <pre className={s.code}>
              <code>{useNavigateCode}</code>
            </pre>
          </div>
          <div className={s.hookItem}>
            <span className={s.hookName}>useLocation:</span>
            <p className={s.hookDescription}>
              Предоставляет информацию о текущем URL, такой как pathname и
              состояние.
            </p>
            <pre className={s.code}>
              <code>{useLocationCode}</code>
            </pre>
          </div>
          <div className={s.hookItem}>
            <span className={s.hookName}>useRoutes:</span>
            <p className={s.hookDescription}>
              Позволяет определять маршруты в виде массива, что может быть
              удобно для управления маршрутами в более сложных приложениях.
            </p>
            <pre className={s.code}>
              <code>{useRoutes}</code>
            </pre>
          </div>
          <div className={s.hookItem}>
            <span className={s.hookName}>useSearchParams:</span>
            <p className={s.hookDescription}>
              Чтобы использовать useSearchParams, вам нужно импортировать его из
              react-router-dom. Вот пример того, как вы можете использовать его
              для извлечения и изменения параметров поискового запроса.
            </p>
            <pre className={s.code}>
              <code>{useSearchParamsCode}</code>
            </pre>
          </div>
        </div>
      </section>
      <DocLink
        href="https://reactrouter.com/home"
        title="Документация React-router"
      />
    </article>
  );
};
