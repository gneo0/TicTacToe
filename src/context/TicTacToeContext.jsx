import { createContext, useContext, useEffect, useState } from 'react';
import { WIN_CONDITIONS, PLAYER_X, PLAYER_O } from '../utils/constants';

const TicTacToeContext = createContext(undefined);

export const TicTacToeProvider = ({ children }) => {
	const [boxValue, setBoxValue] = useState(Array(9).fill(null));
	const [playerWins, setPlayerWins] = useState('');
	const [playerXScore, setPlayerXScore] = useState(0);
	const [playerOScore, setPlayerOScore] = useState(0);
	const [isTie, setIsTie] = useState('');
	const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

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

	useEffect(() => {
		const checkWinner = () => {
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
		};
		checkWinner();
	}, [boxValue, playerWins]);

	return (
		<TicTacToeContext.Provider
			value={{
				boxValue,
				playerXScore,
				playerOScore,
				playerWins,
				isTie,
				setIsTie,
				setBoxValue,
				setPlayerWins,
				handleReset,
				handleBoxClick,
			}}
		>
			{children}
		</TicTacToeContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(TicTacToeContext);

	if (context === undefined)
		throw new Error(
			'TicTacToe context can be used only inside TicTacToe provider'
		);

	return context;
};
