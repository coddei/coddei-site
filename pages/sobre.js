import styles from './sobre.module.css'
import Layout from '../components/layout';
import CardAbout from "../components/cardAbout";

export default function Sobre() {
    return (
        <Layout>
            <div className={styles.content} id={styles.sobreContentTop}>
                <div className={styles.shellLeftSobre}>
                    <div className={styles.textLeftSobre}>
                        <h1 className={styles.titleSobre}>
                            um time,
                            <br />
                            um objetivo
                        </h1>
                        <div className={`${styles.dividerSobre} back-blue`}></div>
                        <p className={styles.secondaryTextSobre}>
                            A Coddei nasceu com o propósito de melhorar o cenário das áreas de
                            desenvolvimento relacionadas a tecnologia, tentamos encontrar
                            soluções para melhorar o trabalho daqueles que estão envolvidos do
                            HTML ao Machine Learning. 
                            <br />
                            <br />
                            Na busca por esses problemas e soluções criamos um servidor no
                            Discord para discutir programação, mas já existe planos de
                            expansão com o desenvolvimento de produtos voltados para as mesmas
                            áreas do propósito de nascimento.
                        </p>
                    </div>
                    <div className={styles.goBottomButton}>
                        <div onClick={
                            () => {
                                document.querySelector(`#${styles.sobreContentBottom}`).scrollIntoView({ 
                                    behavior: 'smooth' 
                                });
                            }
                        }>
                            <img src="/icons/arrow.svg"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.content} id={styles.sobreContentBottom}>
                <div className={styles.shellTextBottom}>
                    <div className={styles.textLeftSobreBottom}>
                        <h1 className={styles.titleSobreBottom}>QUEM CONSTRÓI A CODDEI?</h1>
                        <div className={`${styles.dividerSobre} back-blue`}></div>
                    </div>
                </div>
                <div className={styles.shellCards}>
                    <CardAbout
                        name={"Pedro Borges"}
                        nickname={"azanbertre"}
                        profilePic={"https://avatars2.githubusercontent.com/u/18371620?s=400&u=6280154ddadd56633457a21f16450453929dd309&v=4"}
                        type={"Back-End Developer"}
                        email={"azanbertre@coddei.com"}
                        text={
                            "Entusiasta da área tecnológica, atualmente desenvolvedor Full-Stack na DeeperSystems e dono da Coddei"
                        }
                        links={[
                            "https://github.com/azanbertre",
                            "https://www.linkedin.com/in/pvborges/",
                            "http://azanbertre.me/",
                        ]}
                    />
                    <CardAbout
                        name={"Marcosuel Vieira"}
                        nickname={"lexmarcos"}
                        profilePic={"https://avatars2.githubusercontent.com/u/15710637?s=400&u=1ad7725d60fe12be1fb4a1b3b7e8916136d08453&v=4"}
                        type={"Front-End Developer"}
                        email={"lexmarcos@coddei.com"}
                        text={
                            "Amante de bons designs gerenciador de projetos e interfaces da Coddei e atualmente trabalhando remoto para a DeeperSystems"
                        }
                        links={[
                            "https://github.com/lexmarcos",
                            "https://www.linkedin.com/in/marcosuel-filho-363a1b10a/",
                            "https://lexmarcos.github.io/",
                        ]}
                    />
                </div>
                <div className={styles.shellCards}>
                    <CardAbout
                        name={"Lucas Dantas"}
                        nickname={"luguinha"}
                        profilePic={"https://avatars0.githubusercontent.com/u/63150672?s=400&u=f6d65068d9d719bdb4af18c3d4b057a14a252f0a&v=4"}
                        type={"Gerente de Marketing"}
                        email={"bilu@coddei.com"}
                        text={
                            "Estudante de administração na Universidade Potiguar, swing trader e apreciador de animações japonesas"
                        }
                        links={[
                            "https://github.com/lugabrield",
                            "https://www.linkedin.com/in/lucas-dantas-22746216a/"
                        ]}
                    />                    
                    <CardAbout
                        name={"Henry Medeiros"}
                        nickname={"EternalGiant"}
                        profilePic={"https://avatars2.githubusercontent.com/u/66380727?s=400&v=4"}
                        type={"Estudante de Web Development"}
                        email={""}
                        text={
                            "Estudante de T.I e designer por hobby. Juntando os universo do design e da programação, busco sempre desenvolver projetos singulares e contribuir de forma única e marcantes nos projetos em que atuo"
                        }
                        links={[
                            "https://github.com/henrymedeiros",
                            "https://www.linkedin.com/in/henry-medeiros77/"
                        ]}
                    />                    
                </div>
                <div className={styles.goTopButton} onClick={
                    () => {
                        document.querySelector(`#${styles.sobreContentTop}`).scrollIntoView({ 
                            behavior: 'smooth' 
                        });
                    }
                }><img src="/icons/arrow.svg"></img></div>
            </div>
        </Layout>
    );
}