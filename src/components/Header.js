import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/Header.scss';
export default class Header extends Component {

    onHeaderLinkClick(modalId) {
        this.props.handleHeaderLinkClick(modalId);
    }

	render() {
		return (
			<header>
				<div className="header-links-container">
					{this.props.headerLinks.map((link) => {
						return (
							<a href="#" className="header-link link.key" onClick={() => this.onHeaderLinkClick(link.id)} key={link.id}>
								<FormattedMessage id={link.translationId} />
							</a>
						);
					})}
				</div>
			</header>
		);
	}
}
