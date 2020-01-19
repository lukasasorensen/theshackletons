import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/About.scss';
export default class About extends Component {
	render() {
		return (
			<div className="about">
				<div className="about-body">
					<p className="about-body-text">
						<FormattedMessage id="about.body" />
					</p>
				</div>
			</div>
		);
	}
}
