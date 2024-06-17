import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { TicTacToeProvider } from './context/TicTacToeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<TicTacToeProvider>
			<App />
		</TicTacToeProvider>
	</React.StrictMode>
);
