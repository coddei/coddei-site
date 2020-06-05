import styles from './navbar.module.css'
import NavLink from './navlink';
import NavigationDrawer from "./navigationDrawer";
import { useState } from "react";

export default function Navbar() {
    const [navigation, setNavigation] = useState(false);
    return (
        <>
            <NavigationDrawer updateNavigation={setNavigation} navigation={navigation}/>

            <div className={`${styles.navbar} light`}>
                <ul className={styles.navbarLinks}>
                    <div className={`${styles.navlink} ${styles.navlinkLeft}`}>
                        <li>
                            <NavLink href="/" activeClassName={styles.activeNavlink} className={`${styles.navbarLink} text-light-blue`}>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink href="/sobre" activeClassName={styles.activeNavlink} className={`${styles.navbarLink} text-light-blue`}>SOBRE</NavLink>
                        </li>
                        {/* <li>
                            <NavLink href="/produtos" activeClassName={styles.activeNavlink} className={`${styles.navbarLink} text-light-blue`}>PRODUTOS</NavLink>
                        </li> */}
                        <li>
                            <NavLink href="/discord" activeClassName={styles.activeNavlink} className={`${styles.navbarLink} text-light-blue`}>DISCORD</NavLink>
                        </li>
                    </div>

                    <li className={styles.menuIcon}>
                        <img src='/icons/menu-icon.svg' alt="" onClick={() => {setNavigation(!navigation);}}/>
                    </li>

                    <div className={`${styles.navlink} ${styles.navlinkRight}`}>
                        <li>
                            <img className={styles.navbarImg} src="/logos/logo-1.png" alt="logo coddei" />
                        </li>
                    </div>
                </ul>
            </div>
        </>
    );
}
