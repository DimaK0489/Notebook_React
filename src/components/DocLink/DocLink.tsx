import s from "./DocLink.module.css";

interface Props {
  href: string;
  title?: string;
}

export const DocLink = ({
  href,
  title = "Официальная документация React",
}: Props) => {
  return (
    <div className={s.wrapper}>
      <a href={href} className={s.link}>
        <span className={s.icon}>🔗</span>
        {title}
      </a>
    </div>
  );
};
