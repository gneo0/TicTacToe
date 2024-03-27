import { useState } from 'react';
import useCheckWinner from './hooks/useCheckWinner';

const PLAYER_X = 'X';
const PLAYER_O = 'O';

function App() {
	const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
	const {
		boxValue,
		playerXScore,
		playerOScore,
		playerWins,
		setPlayerWins,
		isTie,
		setIsTie,
		setBoxValue,
	} = useCheckWinner();

	const handleBoxClick = (i) => {
		const newBoxValue = [...boxValue];

		// Return if the box was already clicked or if there is a winnner
		if (newBoxValue[i] || playerWins) return;

		// Depending whose player's turn, set the value on the box of the corresponding index
		newBoxValue[i] = playerTurn;
		setBoxValue(newBoxValue);

		playerTurn === PLAYER_X ? setPlayerTurn(PLAYER_O) : setPlayerTurn(PLAYER_X);
	};

	// Resetting all the states
	const handleReset = () => {
		setPlayerWins('');
		setBoxValue(Array(9).fill(null));
		setIsTie('');
	};

	return (
		<section className="tic-tac-toe">
			<h1>
				Tic <span>Tac</span> Toe
			</h1>

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

			<div className="wins-counter">
				<p className={playerXScore > 0 ? 'hasScore' : ''}>
					X SCORE: <span>{playerXScore}</span>
				</p>
				<p className={playerOScore > 0 ? 'hasScore' : ''}>
					O SCORE: <span>{playerOScore}</span>
				</p>
			</div>

			<section className="board">
				{Array.from({ length: 9 }, (_, i) => (
					<div
						key={i}
						className={boxValue[i] === 'O' ? 'O' : ''}
						onClick={() => handleBoxClick(i)}
					>
						{boxValue[i]}
					</div>
				))}
			</section>
			<button onClick={handleReset}>Reset</button>
		</section>
	);
}

export default App;
