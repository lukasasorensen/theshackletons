import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/Header.scss';
import headerLinks from '../constants/headerLinks';

export default class Header extends Component {
	constructor(props) {
        super(props);
        this.defaultPrimaryColor = "#65eb70";
        this.defaultSecondaryColor = "#ff7600"
		this.state = {
			headerStyles: {
                backgroundColor: this.defaultSecondaryColor,
                color: this.defaultPrimaryColor
			}
		};
    }

	linkMouseOver(isOver, linkPrimaryColor, linkSecondaryColor) {
		console.log(isOver, linkPrimaryColor, linkSecondaryColor);
		this.setState({headerStyles: {backgroundColor: linkSecondaryColor, color: linkPrimaryColor}})
	}

	render() {
		return (
			<header style={this.state.headerStyles}>
				<div className="header-links-container">
					{headerLinks.map((link) => {
						return (
							<a
								href={link.route}
								className="header-link link.key"
								onMouseEnter={this.linkMouseOver.bind(
									this,
									true,
									link.colorPrimary,
									link.colorSecondary
								)}
								onMouseLeave={this.linkMouseOver.bind(
									this,
									false,
									this.defaultPrimaryColor,
									this.defaultSecondaryColor
								)}
							>
								<FormattedMessage id={link.translationId} />
							</a>
						);
					})}
				</div>
				<div className="header-title-container">
					<h1>
						<FormattedMessage id="header.title" />
					</h1>
				</div>
			</header>
		);
	}
}
