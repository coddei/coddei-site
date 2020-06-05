import styles from './cardAbout.module.css'

export default function CardAbout({
    name,
    nickname,
    profilePic,
    type,
    email,
    text,
    links,
}) {
    return (
        <div className={styles.card}>
            <div
                className={styles.profileCardAbout}
                style={{ background: `url(${profilePic}) center/cover` }}
            ></div>
            <div className={styles.shellName}>
                <div className={styles.nameCard}><strong>{name}</strong></div>
                <div className={styles.nickname}>{nickname}</div>
            </div>
            <div className={styles.shellTextCard}>
                <h3 className={styles.typeCard}>{type}</h3>
                <div className={styles.shellEmail}>
                    { email.length > 0 ? <span className={`${styles.iconCard} material-icons`}>email</span> : null }
                    <span className={styles.emailCard}>{email}</span>
                </div>
                <p className={styles.textCard}>{text}</p>
            </div>
            <div className={styles.shellCardActions}>
                <a href={links[0]}>
                    <div className={styles.actionCard} id="action-git" style={{background: `url('/images/github-button-background.png') center/cover`}}></div>
                </a>
                <a href={links[1]}>
                    <div className={styles.actionCard} id="action-linkedin" style={{background: `url('images/linkedin-background.png') center/cover`}}></div>
                </a>
                {
                    links.length > 2 ? <a href={links[2]}>
                        <div className={styles.actionCard} id="action-portfolio" style={{background: `url('images/portfolio-background.png') center/cover`}}></div>
                    </a> : null
                }
            </div>
        </div>
    );
}