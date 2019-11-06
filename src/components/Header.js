import React, { PropTypes, Component } from 'react';
import {FormattedMessage} from 'react-intl';

export default class Header extends Component {
	render() {
		return (
			<header>
				<FormattedMessage id="header.title" />
			</header>
		);
	}
}
