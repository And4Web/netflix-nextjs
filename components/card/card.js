import { useState } from "react";
import Image from "next/image";
import styles from "./card.module.css";

import cls from 'classnames'
import {motion} from 'framer-motion'

function Card(props) {
  const { imgUrl, size, id } = props;
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    setImgSrc("https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
  }

  const scale = id === 0 ? {scaleY: 1.1} : {scale: 1.1}

  return (    
      <div className={styles.container}>
        <motion.div 
        whileHover={{...scale, transition: {duration: 0.3}}}
        whileTap={{scale: 0.9}}
        className={cls(styles.imgMotionWrapper, classMap[size])}>
          <Image
            src={imgSrc}
            alt={`card image: ${size}`}
            fill
            onError={handleOnError}
            className={styles.cardImg}
          />
        </motion.div>
      </div>    
  );
}

export default Card;
