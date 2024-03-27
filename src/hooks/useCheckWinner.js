import { useEffect, useState } from 'react';

const WIN_CONDITIONS = [
	// horizontal win
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],

	// vertical win
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],

	// cross win
	[0, 4, 8],
	[2, 4, 6],
];

export default function useCheckWinner() {
	const [boxValue, setBoxValue] = useState(Array(9).fill(null));
	const [playerWins, setPlayerWins] = useState('');
	const [playerXScore, setPlayerXScore] = useState(0);
	const [playerOScore, setPlayerOScore] = useState(0);
	const [isTie, setIsTie] = useState('');

	useEffect(() => {
		function checkWinner() {
			for (let i = 0; i < WIN_CONDITIONS.length; i++) {
				const [x, y, z] = WIN_CONDITIONS[i];

				// Checking if the current winning condition is met
				if (
					boxValue[x] &&
					boxValue[x] === boxValue[z] &&
					boxValue[y] === boxValue[z]
				) {
					// If a winning condition is met, set the winner
					setPlayerWins(boxValue[x]);

					// else if there is value for every box and there isn't a winner, set to tie
				} else if (boxValue.every((val) => val)) setIsTie('TIE');
			}

			// Adding the score to the corresponding winner
			if (playerWins === 'X') setPlayerXScore((score) => score + 1);
			else if (playerWins === 'O') setPlayerOScore((score) => score + 1);
		}
		checkWinner();
	}, [boxValue, playerWins]);

	return {
		boxValue,
		playerXScore,
		playerOScore,
		playerWins,
		isTie,
		setIsTie,
		setBoxValue,
		setPlayerWins,
	};
}
