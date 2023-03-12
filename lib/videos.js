// import videoData from "../data/videos.json";

export const getVideos = async () => {
  const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=disney%20trailers&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}
  `)

  const videoData = await response.json();
  // console.log("<===video.js response recent:===> ", videoData);

  return videoData.items.map((item)=>{
    return {
      title: item.snippet.title || null,
      imgUrl: item.snippet.thumbnails.high.url || null,
      id: item?.id?.videoId || null,

      /* 
      (1) ?? is Nullish Coalescing operator
      (2) ?. is Optional Chaining operator
          read more about these operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
      */

    }
  });
};