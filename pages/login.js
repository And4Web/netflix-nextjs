import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Login.module.css";

import {magic, RPCError, RPCErrorCode} from '../lib/magic-client';

function Login() {
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // console.log("Magic introduction: ", magic.auth.loginWithMagicLink);

  const router = useRouter();

  const handleOnChangeEmail = (e) => {
    setUserMsg("");    
    const email = e.target.value;
    setEmail(email);
  };

  const handleLoginWithEmail = async (e) => {
    e.preventDefault();

    if(email){      
      if(email === "andpmedia1@gmail.com"){        
        try {
          setIsLoading(true);
          const didToken = await magic.auth.loginWithMagicLink({
            email          
          });

          if(didToken){
            setIsLoading(false);
            router.push("/");
          }
        } catch (error) {
          setIsLoading(false);
          console.log("Error from login.js: ", error)
        }/*-- */
    }else{
        setIsLoading(false);
        setUserMsg("Something went wrong logging in")
      }
    }else {
      // show user message
      setIsLoading(false);
      setUserMsg("Enter a valid email address");      
    }
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix-Login</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.wrapper}>
          <Link href="/" legacyBehavior>
            <a className={styles.logoLink}>
              <div className={styles.logoWrapper}>
                {" "}
                <Image
                  src="/static/netflix.svg"
                  alt="netflix-log"
                  height="50"
                  width="170"
                />{" "}
              </div>
            </a>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            type="text"
            placeholder="Email address"
            className={styles.emailInput}
            onChange={handleOnChangeEmail}
          />
          <p className={styles.userMsg}>{userMsg}</p>
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            {isLoading? "Signing in...": "Sign In"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default Login;
