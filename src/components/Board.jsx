import BoardBox from './BoardBox';

const Board = () => {
	return (
		<section className="board">
			{Array.from({ length: 9 }, (_, i) => (
				<BoardBox key={i} index={i} />
			))}
		</section>
	);
};

export default Board;
