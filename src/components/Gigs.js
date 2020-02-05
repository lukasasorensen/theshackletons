import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/Gigs.scss';
export default class Gigs extends Component {
	render() {
		return (
			<div className="gigs w-100 h-100">
				<div className="gigs-body w-100 h-100">
					<div className="iframe-container"><iframe src="https://calendar.google.com/calendar/embed?src=theshackletonspubliccalendar%40gmail.com&ctz=America%2FChicago" width="800" height="600" frameborder="0" scrolling="no"></iframe></div>
				</div>
			</div>
		);
	}
}
