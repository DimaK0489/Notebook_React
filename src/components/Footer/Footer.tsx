import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={s.navFooter}>
      <button className={s.btn} disabled>
        ◀ Предыдущий
      </button>
      <button className={s.btn}>📁 Разделы</button>
      <button className={`${s.btn} ${s.btnPrimary}`}>Следующий ▶</button>
    </div>
  );
};
