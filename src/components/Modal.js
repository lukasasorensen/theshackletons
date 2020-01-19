import '../styles/Modal.scss';

import React from 'react';
import Draggable from 'react-draggable';
import { FormattedMessage } from 'react-intl';
export default class Modal extends React.Component {
    
    onModalClose() {
        this.props.handleOnModalClose();
    }

    focusModal() {
        this.props.handleFocusModal();
    }
    
	render() {
		return (
            <Draggable onMouseDown={this.focusModal.bind(this)}>
			<div className={`modal ${this.props.hidden ? 'hidden' : 'visible'}`} style={{zIndex: this.props.zIndex}}>
				<div className="modal-header">
					<div className="modal-close" onClick={this.onModalClose.bind(this)}>&times;</div>
                    <FormattedMessage id={this.props.title} />
				</div>
				<div className="modal-body">{this.props.children}</div>
			</div>
            </Draggable>
		);
	}
}