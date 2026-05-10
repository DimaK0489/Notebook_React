import s from "./TopicHeader.module.css";

interface Props {
  title: string;
  description: string | React.ReactNode;
}

export const TopicHeader = ({ title, description }: Props) => {
  return (
    <section className={s.section}>
      <h1 className={s.title}>{title}</h1>
      <p className={s.description}>{description}</p>
    </section>
  );
};
