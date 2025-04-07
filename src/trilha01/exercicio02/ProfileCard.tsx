import styles from './ProfileCard.module.css';

export default function ProfileCard() {
	return (
		<div className={styles.card}>
			<h2 className={styles.name}>Username</h2>
			<p className={styles.bio}>
				Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi totam ipsam
				quae praesentium rerum animi vero quidem repudiandae temporibus. Voluptas expedita possimus
				quis tempora aliquid nobis. Blanditiis, cupiditate minima!
			</p>
		</div>
	);
}
