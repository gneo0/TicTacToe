import { useAppContext } from '../context/TicTacToeContext';

const BoardBox = ({ index }) => {
	const { boxValue, handleBoxClick } = useAppContext();

	return (
		<div
			className={boxValue[index] === 'O' ? 'O' : ''}
			onClick={() => handleBoxClick(index)}
		>
			{boxValue[index]}
		</div>
	);
};

export default BoardBox;
