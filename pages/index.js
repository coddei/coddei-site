import styles from './index.module.css'
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
	return (
		<Layout>
			<div className={styles.content} id={styles.homeContent}>
				<div className={styles.shellLeft}>
					
					<div className={styles.textLeftHome}>
						<h1 className={styles.titleHome}>
							Tudo começa<br/>na programação.
						</h1>
					
						<div className={`${styles.divider} back-blue`}></div>

						<p className={styles.secondaryTextHome}>
							O Coddei é uma plataforma em desenvolvimento que cria soluções para
							programadores, designers experientes e também para aqueles que estão começando nessas profissões.
						</p>

					</div>

					<div className={styles.buttonsLeftHome}>
						<Link href="/sobre">
							<a><img src="/images/multiple-users-silhouette.png"></img></a>
						</Link>						
						<Link href="/discord">
							<a><img src="/images/discord.png"></img></a>
						</Link>

						<a href="https://github.com/coddei">
							<img src="/images/github-image.png"></img>
						</a>
					</div>

				</div>
			</div>
		</Layout>
	);
}
