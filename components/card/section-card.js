import styles from "./section-card.module.css";

import Card from "./card";

function SectionCard(props) {
  const { title } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        <Card imgUrl="/static/banner.jpeg" size="large" />
        <Card imgUrl="/static/banner.jpeg" size="large" />
        <Card imgUrl="/static/banner.jpeg" size="large" />
        <Card imgUrl="/static/banner.jpeg" size="large" />
        <Card imgUrl="/static/banner.jpeg" size="large" />
        <Card imgUrl="/static/banner.jpeg" size="large" />
        <Card imgUrl="/static/banner.jpeg" size="large" />
        <Card imgUrl="/static/banner.jpeg" size="large" />
        <Card imgUrl="/static/banner.jpeg" size="large" />
        <Card imgUrl="/static/banner.jpeg" size="large" />
      </div>
    </section>
  );
}

export default SectionCard;
