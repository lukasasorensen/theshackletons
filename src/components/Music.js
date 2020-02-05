import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/Music.scss';
export default class Music extends Component {
	render() {
		return (
			<div className="music">
				<div className="music-body">
					<div class="bandcamp-iframe-container">
                        <iframe src="https://colincampbellandtheshackletons.bandcamp.com/"></iframe>
                    </div>
				</div>
			</div>
		);
	}
}
