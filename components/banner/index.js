import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from "./banner.module.css";

const Banner = (props) => {
  const { title, subtitle, imgUrl, videoId } = props;
  const router = useRouter();

  const handleOnPlay = () => {
    console.log("handleOnPlay");
    router.push(`video/${videoId}`)
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          <div className={styles.left}>
            <div className={styles.nseriesWrapper}>
              <p className={styles.firstLetter}>N</p>
              <p className={styles.series}>S E R I E S</p>
            </div>

            <h3 className={styles.title}>{title}</h3>

            <h3 className={styles.subTitle}>{subtitle}</h3>

            <div className={styles.playBtnWrapper}>
              <button className={styles.btnWithIcon} onClick={handleOnPlay}>
                <Image src="/static/play.svg" alt="Play button" height="32" width="32"/>
                <span className={styles.playText}>Play</span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={styles.bannerImg}
          style={{
            backgroundImage: `url(${imgUrl})`,
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
