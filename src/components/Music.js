import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/Music.scss';
export default class Music extends Component {
	render() {
		return (
			<div className="music">
				<div className="music-body">
					<p className="music-body-text">
                        music
					</p>
				</div>
			</div>
		);
	}
}
