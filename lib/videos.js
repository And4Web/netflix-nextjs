// import videoData from "../data/videos.json";

const getCommonVideos = async (url) => {
  const BASE_URL = 'https://youtube.googleapis.com/youtube/v3';
  const URL = `${BASE_URL}/${url}&maxResults=25&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`

  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export const getVideos = async (searchQuery) => {
  try {
    const url = `search?part=snippet&type=videos&maxResults=25&q=${searchQuery}`;

  //   const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=videos&maxResults=25&q=${searchQuery}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}
  // `)

  const videoData = await getCommonVideos(url);
  // console.log("<===video.js response recent:===> ", videoData);

  if (videoData?.error) {
    console.error("Youtube API error", videoData.error);
    return [];
  }
  return videoData.items.map((item)=>{
    const id = item.id?.videoId || item.id;
    return {
      title: item.snippet.title || null,
      imgUrl: item.snippet.thumbnails.high.url || null,
      id,      
    }
  });    
  } catch (error) {
    console.error("Something went wrong with Youtube API: ", error);
    return []
  }  
};

export const getPopularVideos = async () => {
  try {
    const url = 'videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US';
    const videoData = await getCommonVideos(url);
    if (videoData?.error) {
      console.error("Youtube API error", videoData.error);
      return [];
    }
    return videoData.items.map((item)=>{
      const id = item.id?.videoId || item.id;
      return {
        title: item.snippet.title || null,
        imgUrl: item.snippet.thumbnails.high.url || null,
        id,      
      }
    });  
  } catch (error) {
    console.error("Something went wrong with Youtube API: ", error);
    return []
  }
 
}

/* 
(1) ?? is Nullish Coalescing operator
(2) ?. is Optional Chaining operator
    read more about these operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
*/