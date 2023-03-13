import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Login.module.css";

function login() {

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    console.log("Login button clicked.")
  }
  
  return (
    <div>
      <Head>
        <title>Netflix-Login</title>
      </Head>
      <header>
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
          />
          <p className={styles.userMsg}></p>
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
}

export default login;
