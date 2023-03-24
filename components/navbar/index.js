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

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" legacyBehavior>
          <a className={styles.logoLink}>
            <div className={styles.logoWrapper}> <Image src="/static/netflix.svg" alt="netflix-log" height="50" width="170"/> </div>
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
          {/* <a>Sign out1</a> */}
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

          {showDropdown && (
            <div className={styles.navDropdown}>
              <div>
                <Link href="/login" legacyBehavior>
                  <a className={styles.linkName}>Sign out</a>
                </Link>
                <div className={styles.lineWrapper}></div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
