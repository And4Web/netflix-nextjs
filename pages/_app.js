import {useEffect} from 'react';
import {magic} from '../lib/magic-client';
import {useRouter} from 'next/router';

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(()=>{
    const effect = async ()=>{
      const isLoggedIn = await magic.user.isLoggedIn();
      if(isLoggedIn){
        router.push("/");
      }else{
        router.push("/login");
      }
    }
    effect();
  }, [])
  return <Component {...pageProps} />
}
