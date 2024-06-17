import Logo from './components/Logo';
import CheckWinnerMsg from './components/CheckWinnerMsg';
import ScoreBoard from './components/ScoreBoard';
import Board from './components/Board';
import Btn from './components/Btn';

const App = () => {
	return (
		<section className="tic-tac-toe">
			<Logo />
			<CheckWinnerMsg />
			<ScoreBoard />
			<Board />
			<Btn />
		</section>
	);
};

export default App;
