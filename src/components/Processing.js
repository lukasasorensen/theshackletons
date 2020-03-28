import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import loadingGif from '../assets/loading.gif';
import "../styles/Processing.scss";
export default class Processing extends Component {
	render() {
		return (
			<div className="processing-container">
                <div className="loading-gif-container">
                    <img src={loadingGif} alt="loading..."/>
                </div>
                <h2 className="processing-message">
                    <FormattedMessage id={this.props.message && this.props.message.length ? this.props.message : 'processing.defaultMessage' }/>
                </h2>
            </div>
		);
	}
}
