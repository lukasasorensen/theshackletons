import React from 'react';
import './styles/App.scss';
import { IntlProvider } from 'react-intl';
import Home from './components/Home';
import en from './translations/en.js';

function App() {
	return (
		<IntlProvider locale="en" messages={en}>
			<Home />
		</IntlProvider>
	);
}

export default App;
