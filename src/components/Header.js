import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';

if (process.env.BROWSER) {
	require('../styles/Header.scss');
}

export default class Header extends Component {
	render() {
		return (
			<header>
				<FormattedMessage id="header.title" />
			</header>
		);
	}
}
