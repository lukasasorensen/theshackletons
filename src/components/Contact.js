import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/Contact.scss';
export default class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<div className="contact-body">
					<p className="contact-body-text">
                        Email: <a href="mailto:theshackletonsband@gmail.com" target="_blank">theshackletonsband@gmail.com</a>
					</p>
				</div>
			</div>
		);
	}
}
