import { useAppContext } from '../context/TicTacToeContext';

const CheckWinnerMsg = () => {
	const { playerWins, isTie } = useAppContext();

	return (
		<>
			{playerWins && (
				<p className="winner">
					🎉 Player <span>{playerWins}</span> wins 🎉
				</p>
			)}
			{isTie && (
				<p className="tie">
					The game is a <span>TIE</span>
				</p>
			)}
		</>
	);
};

export default CheckWinnerMsg;
