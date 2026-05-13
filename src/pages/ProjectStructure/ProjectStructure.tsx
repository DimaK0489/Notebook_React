import { structureData } from "../../constants/structureApp";
import s from "./ProjectStructure.module.css";

export const ProjectStructure = () => {
  return (
    <article className={s.container}>
      <h2 className={s.title}>Структура React проекта</h2>
      <section className={s.content}>
        {structureData.map((item) => (
          <div
            key={item.id}
            className={`${s.item} ${item.parent ? s.child : ""}`}
          >
            <span className={s.icon}>
              {item.name.includes(".") ? "📄" : "📁"}
            </span>
            <span className={s.name}>{item.name}</span>
            <span className={s.separator}>—</span>
            <span className={s.description}>{item.desc}</span>
          </div>
        ))}
      </section>
    </article>
  );
};
