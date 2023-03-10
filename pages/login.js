import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");

  const router = useRouter();

  const handleOnChangeEmail = (e) => {
    setUserMsg("");
    console.log("event", e);
    const email = e.target.value;
    setEmail(email);
  };

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    console.log("Login button clicked.")

    if(email){
      if(email === "anand@gmail.com"){
        // route to dashboard
        router.push("/")
        console.log("route to dashboard")
      }else{
        setUserMsg("Something went wrong logging in")
      }
    }else {
      // show user message
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
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
}

export default Login;
