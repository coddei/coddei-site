import styles from './index.module.css'
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
	return (
		<Layout>
			<div className={styles.content} id={styles.homeContent}>
				<div className={styles.textLeftHome}>
					<div className={styles.logoHome}>
						<img src="/logos/logo-1.png" alt="logo coddei" />
					</div>

					<h1 className={styles.titleHome}>
						🚧 Em desenvolvimento 🚧
					</h1>
					<div className={styles.enterDiscord}>
						<div>
							<a href="https://bit.ly/coddeidiscord">
								Discord
							</a>
							<img src="https://www.pngkey.com/png/full/20-200938_white-discord-logo-png-png-free-discord-logo.png"></img>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
