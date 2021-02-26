import React, { useState } from 'react';
import Card from '../../components/Card';
import styles from './CardContainer.module.css';
import { PHASES_CLASSIC } from '../../static/constants';
import { shuffleArray } from '../../functions';
import Button from '../../components/Button';

const CardContainer = () => {
	const copy = PHASES_CLASSIC.slice();

	const initialPhase = { phases: copy, shuffle: false };
	const [phases, setPhases] = useState(initialPhase);

	const defaultPhase = Object.assign({}, { phases: copy, shuffle: false });

	let setClassNames = () => {
		let classNames = `${styles.card_container}`;
		classNames = phases.shuffle
			? (classNames += ` ${styles.animate}`)
			: (classNames += ` ${styles.unanimate}`);
		return classNames;
	};

	return (
		<div className={setClassNames()}>
			<Card phases={phases} />

			<Button
				text="Shuffle Phases"
				callback={() => {
					setPhases({ phases: shuffleArray(phases.phases), shuffle: true });
				}}
			/>
			<Button
				text="Reset Phases"
				callback={() => {
					setPhases({ ...defaultPhase });
				}}
			/>
		</div>
	);
};

// class CardContainer extends Component {
// 	// arrayPhases = PHASES_CLASSIC.slice();
// 	constructor() {
// 		super();
// 		this.initialState = { phases: PHASES_CLASSIC.slice(), shuffle: false };
// 		this.state = this.initialState;
// 	}

// 	shufflePhases = () => {
// 		this.setState({
// 			phases: shuffleArray(this.state.phases),
// 			shuffle: !this.state.shuffle,
// 		});
// 	};

// 	resetPhases = () => {
// 		this.setState({
// 			...this.initialState,
// 			phases: PHASES_CLASSIC.slice(),
// 		});
// 	};

// 	setClassNames = () => {
// 		let classNames = `${styles.card_container}`;
// 		classNames = this.state.shuffle
// 			? (classNames += ` ${styles.animate}`)
// 			: classNames;
// 		return classNames;
// 	};

// 	render() {
// 		let phaseList = this.state.phases;
// 		return (
// 			<div className={this.setClassNames()}>
// 				<Card phases={phaseList} />
// 				<Button text="Shuffle Phases" callback={this.shufflePhases} />
// 				<Button text="Reset Phases" callback={this.resetPhases} />
// 			</div>
// 		);
// 	}
// }

export default CardContainer;
