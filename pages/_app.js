import {useEffect, useState} from 'react';
import {magic} from '../lib/magic-client';
import {useRouter} from 'next/router';

import Loading from '@/components/loading/loading';

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // useEffect(()=>{
  //   const effect = async ()=>{
  //     const isLoggedIn = await magic.user.isLoggedIn();
  //     if(isLoggedIn){
  //       // setIsLoading(false)
  //       router.push("/");
  //     }else{
  //       // setIsLoading(false)
  //       router.push("/login");
  //     }
  //   }
  //   effect();
  // }, [router])  

  useEffect(()=>{
    const handleRouterChange = () => {
      setIsLoading(false)
    }    
    router.events.on('routeChangeComplete', handleRouterChange);
    router.events.on('routeChangeError', handleRouterChange);
    return ()=>{
      router.events.off('routeChangeComplete', handleRouterChange);
      router.events.off('routeChangeError', handleRouterChange);
    }
  }, [router])

  return /*isLoading? <Loading/>: */<Component {...pageProps} />
}
