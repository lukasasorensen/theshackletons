import '../styles/Modal.scss';

import React from 'react';
import Draggable from 'react-draggable';
import { FormattedMessage } from 'react-intl';
export default class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            initialized: false,
			loading: true
		};
    }
    
    componentDidUpdate() {
        if (!this.props.hidden && !this.state.initialized) {
            this.setState({ initialized: true });
        } 
    }

	onModalClose() {
		this.props.handleOnModalClose();
	}

	focusModal() {
		this.props.handleFocusModal();
	}

	getRandomPosition() {
		var maxY = 20;
		var minY = -50;
		var maxX = 200;
		var minX = -200;

		var pos = {};
		pos.y = minY + Math.random() * (maxY - minY);
		pos.x = minX + Math.random() * (maxX - minX);
		return pos;
	}

	render() {
		return (
			<Draggable
				onMouseDown={this.focusModal.bind(this)}
				handle=".modal-header"
				defaultPosition={this.getRandomPosition()}
			>
				<div
					className={`modal ${this.props.hidden ? 'hidden' : 'visible'}`}
					style={{
						zIndex: this.props.zIndex,
						maxWidth: this.props.maxWidth,
						maxHeight: this.props.maxHeight
					}}
				>
					<div className="modal-header">
						<div className="modal-close" onClick={this.onModalClose.bind(this)}>
							<div>&times;</div>
						</div>

						<div className="modal-title">
							<FormattedMessage id={this.props.title} />
						</div>

						<div className="modal-lines">
							<div className="modal-line" />
							<div className="modal-line" />
							<div className="modal-line" />
						</div>
					</div>
					<div className="modal-body">{this.props.hidden && !this.state.initialized ? null : this.props.children}</div>
					<div className={`modal-overlay ${this.props.inFocus ? 'hidden' : 'visible'}`} />
				</div>
			</Draggable>
		);
	}
}
