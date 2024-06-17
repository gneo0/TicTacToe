import { useAppContext } from '../context/TicTacToeContext';

const ScoreBoard = () => {
	const { playerXScore, playerOScore } = useAppContext();

	return (
		<div className="wins-counter">
			<p className={playerXScore > 0 ? 'hasScore' : ''}>
				X SCORE: <span>{playerXScore}</span>
			</p>
			<p className={playerOScore > 0 ? 'hasScore' : ''}>
				O SCORE: <span>{playerOScore}</span>
			</p>
		</div>
	);
};

export default ScoreBoard;
