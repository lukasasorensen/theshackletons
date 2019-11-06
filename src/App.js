import React from 'react';
import './App.css';
import { IntlProvider } from 'react-intl';
import Header from './components/Header';
import en from './translations/en.js';

function App() {
	return (
		<IntlProvider locale="en" messages={en}>
			<div className="App">
				<Header></Header>
			</div>
		</IntlProvider>
	);
}

export default App;
