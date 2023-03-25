import {useRouter} from 'next/router';

function Video() {
  const router = useRouter();
  
  return (
    <div>Some Video: {router.query.videoId}</div>
  )
}

export default Video