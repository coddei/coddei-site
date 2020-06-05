import styles from './discord.module.css'
import Layout from '../components/layout';

export default function DiscordPage() {
    return (
        <Layout>
            <div className={styles.content} id={styles.discordContent}>
                <div className={styles.shellLeftDiscord}>
                    <div className={styles.textLeftDiscord}>
                        <h1 className={styles.titleDiscord}>
                            junte-se ao<br></br>nosso discord :)
                        </h1>
                        <div className={`${styles.divider} back-blue`}></div>
                        <p className={styles.secondaryTextDiscord}>
                            Faça parte de uma comunidade focada em ajudar o próximo, tire
                            dúvidas, ajude outros usuários a resolver problemas ou divulgue suas
                            artes, tudo isso em um só servidor <span role="img">🤩</span>
                        </p>
                        <a href="https://bit.ly/coddeidiscord" className={styles.discordButton}>
                            Vamos Lá!
                            <img src="/icons/arrow-right.svg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
