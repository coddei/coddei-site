import styles from './navigationDrawer.module.css'
import navStyles from './navbar.module.css'
import NavLink from './navlink';

export default function NavigationDrawer({ updateNavigation, navigation }) {
    return (
        <>
            <div className={`${styles.navigationDrawer} ${navigation ? styles.drawerOpen : ''}`}>
                <img src="/icons/close-icon.svg" className={styles.closeIcon} 
                    onClick={
                        () => {
                            updateNavigation(false);
                        }
                    }
                />

                <ul>
                    <li className={styles.navigationItem}>
                        <NavLink href="/" activeClassName={navStyles.activeNavlink} className={`${navStyles.navbarLink} text-light-blue`}>HOME</NavLink>
                    </li>
                    {/* <li className={styles.navigationItem}>
                        <NavLink href="/produtos" activeClassName={styles.activeNavlink} className={`${styles.navbarLink} text-light-blue`}>PRODUTOS</NavLink>
                    </li> */}
                    <li className={styles.navigationItem}>
                        <NavLink href="/sobre" activeClassName={navStyles.activeNavlink} className={`${navStyles.navbarLink} text-light-blue`}>SOBRE</NavLink>
                    </li>
                    <li className={styles.navigationItem}>
                        <NavLink href="/discord" activeClassName={navStyles.activeNavlink} className={`${navStyles.navbarLink} text-light-blue`}>DISCORD</NavLink>
                    </li>
                </ul>
            </div>
            
            {navigation ? <div className={styles.closerDiv} onClick={() => {
                updateNavigation(false);
            }}></div> : null}
        </>
    );
}
