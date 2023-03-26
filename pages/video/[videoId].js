import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from '../../styles/video.module.css';

Modal.setAppElement("#__next");

function Video() {
  const router = useRouter();

  return (
    <div>
      Some Video: {router.query.videoId}
      <Modal isOpen={true} contentLabel="Watch the video" onRequestClose={()=>{router.back()}} overlayClassName={styles.overlay}>
        <div>Modal body</div>
      </Modal>
    </div>
  );
}

export default Video;
