import styles from "./section-card.module.css";

import Card from "./card";
import Link from "next/link";

function SectionCard(props) {
  const { title, videos=[], size } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, index)=>{          
          return (
            <Link href={`/video/${video.id}`}  key={index}>
              <Card key={index} id={index} imgUrl={video.imgUrl} size={size} />           
            </Link>
          )
        })}      
      </div>
    </section>
  );
}

export default SectionCard;
