import Image from 'next/image';
import styles from './card.module.css';

function Card(props) {
  const {imgUrl, size} = props;

  const classMap = {
    large: "styles.lgItem",
    medium: "styles.mdIem",
    small: "styles.smItem"
  }

  return (
    <div>
      <div className={classMap[size]}>
        <Image src={imgUrl} alt='card image'  height="200" width="200"/>
      </div>
    </div>
  )
}

export default Card