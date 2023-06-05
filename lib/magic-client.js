import {Magic} from 'magic-sdk';

const magicClient = () => {
  // remember Next.js is a full stack framework so any code we write runs on both front end as well as on backend. here the error pops up "window is not defined". so we return a Magic instance only for frontend means only when window is not undefined:
  
  return typeof window !== "undefined" && new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY);
}

export const magic = magicClient();
