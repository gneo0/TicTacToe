import { useAppContext } from '../context/TicTacToeContext';

const Btn = () => {
	const { handleReset } = useAppContext();

	return <button onClick={handleReset}>Reset</button>;
};

export default Btn;
