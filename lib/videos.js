import videoData from "../data/videos.json";

export const getVideos = () => {
  return videoData.items.map((item)=>{
    return {
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
      id: item?.id?.videoId,

      /* 
      (1) ?? is Nullish Coalescing operator
      (2) ?. is Optional Chaining operator
          read more about these operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
      */
    }
  });
};