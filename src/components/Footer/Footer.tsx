import { useLocation, useNavigate } from "react-router-dom";
import s from "./Footer.module.css";
import { menuItems } from "../../constants/menuItems";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = menuItems.findIndex(
    (item) => item.path === location.pathname,
  );
  console.log(currentIndex, "Index");

  const prevPage = currentIndex > 0 ? menuItems[currentIndex - 1] : null;
  const nextPage =
    currentIndex < menuItems.length - 1 && currentIndex !== -1
      ? menuItems[currentIndex + 1]
      : null;

  const handlePrevPage = () => prevPage && navigate(prevPage.path);
  const handleNextPage = () => nextPage && navigate(nextPage.path);

  return (
    <footer className={s.navFooter}>
      <button className={s.btn} disabled={!prevPage} onClick={handlePrevPage}>
        ◀ Предыдущий
      </button>
      <button
        className={`${s.btn} ${s.btnPrimary}`}
        disabled={!nextPage}
        onClick={handleNextPage}
      >
        Следующий ▶
      </button>
    </footer>
  );
};
