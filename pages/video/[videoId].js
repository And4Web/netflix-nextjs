import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from '../../styles/video.module.css';

Modal.setAppElement("#__next");

function Video() {
  const router = useRouter();

  return (
    <div className={styles.container}>      
      <Modal isOpen={true} contentLabel="Watch the video" onRequestClose={()=>router.back()} overlayClassName={styles.overlay} className={styles.modal}>
      <iframe id="player" type="text/html" width="640" height="390"
  src={`http://www.youtube.com/embed/${router.query.videoId}?enablejsapi=1&origin=http://example.com&controls=0&rel=0&autoplay=0`}
  frameborder="0"></iframe>
      </Modal>
    </div>
  );
}

export default Video;
