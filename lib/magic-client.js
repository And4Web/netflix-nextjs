import {Magic} from 'magic-sdk';

const magicClient = () => {
  return typeof window !== "undefined" && new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY);
}


export const magic = magicClient();

// console.log("✨Magic setup: ", magic);
