import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

import { magic } from "../../lib/magic-client";;

const NavBar = () => {  
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState("");

  const router = useRouter();

  useEffect(() => {
    const effect = async ()=>{
      try {
        const {email} = await magic.user.getMetadata();
        if(email){
          setUsername(email);
        }
      } catch (error) {
          console.log("navbar.js error: ", error)
      }
    }
    effect();
  }, [username]);

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleShowDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleSignout = async (e) => {
    e.preventDefault();
    try {
      await magic.user.logout();
      console.log("navbar.js isUserLoggedIn: ", await magic.user.isLoggedIn())
      router.push('/login')
    } catch (error) {
      console.log("navbar.js signout error: ", error);
      router.push('/login')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" legacyBehavior>
          <a className={styles.logoLink}>
            <div className={styles.logoWrapper}> <Image src="/static/netflix.svg" alt="netflix-logo" height="50" width="170"/> </div>
          </a>
        </Link>
      </div>

      <ul className={styles.navItems}>
        <li className={styles.navItem} onClick={handleOnClickHome}>
          Home
        </li>
        <li className={styles.navItem2} onClick={handleOnClickMyList}>
          My List
        </li>
      </ul>

      <nav className={styles.navContainer}>
        <div>          
          <button className={styles.usernameBtn}>
            <p className={styles.username}>{username}</p>
            <div style={{ backgroundColor: "white", marginLeft: "1rem" }}>
              <Image
                src="/static/downArrow.svg"
                alt="dropdown"
                height="32"
                width="32"
                onClick={handleShowDropdown}
              />
            </div>
          </button>

          {username && (showDropdown && (
            <div className={styles.navDropdown}>
              <div>
                <Link href="/login" legacyBehavior >
                  <a className={styles.linkName} onClick={handleSignout}>Sign out</a>
                </Link>
                <div className={styles.lineWrapper}></div>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
