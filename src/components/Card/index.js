import React from 'react';
import styles from './Card.module.css';
const Card = (props) => {
	const { phases } = props;
	const phaseList = phases.phases;
	console.log(phaseList);
	return (
		<div className={styles.card}>
			<div className={styles['card--inner']}>
				<h1>Phase 1O</h1>
				<ol>
					{phaseList.map((phase, i) => {
						return <li key={i}>{phase.name}</li>;
					})}
				</ol>
			</div>
			<div className={styles.card_line_container}>
				<span className={styles.copyright}>&copy;Mattel</span>
				<div className={`${styles.card_line} ${styles['line--red']}`}></div>
				<div className={`${styles.card_line} ${styles['line--blue']}`}></div>
				<div className={`${styles.card_line} ${styles['line--green']}`}></div>
				<div className={`${styles.card_line} ${styles['line--yellow']}`}></div>
			</div>
		</div>
	);
};

export default Card;
