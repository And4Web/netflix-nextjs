import Image from "next/image";
import styles from "./card.module.css";

function Card(props) {
  const { imgUrl, size } = props;

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  // console.log("classMap: ", classMap[size]);

  return (
    <div>
      <div className={styles.container}>
        {`Card: ${size}`}
        <div className={classMap[size]}>
          <Image
            src={imgUrl}
            alt={`card image: ${size}`}
            fill
            className={styles.cardImg}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
