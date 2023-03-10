import { useState } from "react";
import Image from "next/image";
import styles from "./card.module.css";

function Card(props) {
  const { imgUrl, size } = props;
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    setImgSrc("/static/banner.jpeg")
  }

  return (
    <div>
      <div className={styles.container}>
        {`Card: ${size}`}
        <div className={classMap[size]}>
          <Image
            src={imgSrc}
            alt={`card image: ${size}`}
            fill
            onError={handleOnError}
            className={styles.cardImg}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
