import React, { Component } from 'react';
import Header from './Header';
import Modal from './Modal';
import About from './About';
import Music from './Music';
import Gigs from './Gigs';
import Contact from './Contact';
import headerLinks from '../constants/headerLinks';
import '../styles/Home.scss';

export default class Home extends Component {
	constructor(props) {
		super(props);

		const defaultModalState = {
			hidden: true,
			zIndex: 9999
		};
		this.state = {
			about: defaultModalState,
			music: defaultModalState,
			gigs: defaultModalState,
			contact: defaultModalState,
			bgColor: '',
			mouseY: 0,
			wH: 0,
			wW: 0
		};
	}

	_onMouseMove(e) {
		var color = this.getColorFromMousePos(window.innerWidth, window.innerHeight, e.screenX, e.screenY);
		this.setState({ bgColor: color });
	}

	getColorFromMousePos(width, height, x, y) {
		var _x = this.normalize(0, width, x);
        var _y = this.normalize(height, 0, y);
        let hmax = 360, hmin = 100, lmax = 100, lmin = 30;

		var h = _x * (hmax - hmin) + hmin;
		var l = _y * (lmax - lmin) + lmin;

		return `hsl(${h},${l}%,80%)`;
	}

	normalize(min, max, n) {
		return ((n - min) / (max - min)).toFixed(10);
	}

	openModal(modalId) {
		this.focusModal(modalId);
		this.updateModal(modalId, 'hidden', false);
	}

	closeModal(modalId) {
		this.updateModal(modalId, 'hidden', true);
	}

	focusModal(modalId) {
		let highestIndex = Math.max(...headerLinks.map((modal) => this.state[modal.id].zIndex));
        highestIndex++;
		this.setState({ [modalId]: { ...this.state[modalId], zIndex: highestIndex } }, () => console.log(JSON.stringify(this.state, null, 2)));
	}

	updateModal(modalId, prop, value) {
		console.log(modalId);

		this.setState(
			(state) => {
				let modal = { ...state[modalId] };
				modal[prop] = value;
				return { [modalId]: modal };
			},
			() => console.log(JSON.stringify(this.state))
		);
	}

	render() {
		return (
			<div
				className="home"
				onMouseMove={this._onMouseMove.bind(this)}
				style={{ backgroundColor: this.state.bgColor }}
			>
				<Header headerLinks={headerLinks} handleHeaderLinkClick={this.openModal.bind(this)} />
				<Modal
					title="music.header.title"
					hidden={this.state.music.hidden}
					zIndex={this.state.music.zIndex}
					handleOnModalClose={this.closeModal.bind(this, 'music')}
                    handleFocusModal={this.focusModal.bind(this, 'music')}
                    maxWidth="700px"
                    maxHeight="800px"
				>
					<Music />
				</Modal>
				<Modal
					title="gigs.header.title"
					hidden={this.state.gigs.hidden}
					zIndex={this.state.gigs.zIndex}
					handleOnModalClose={this.closeModal.bind(this, 'gigs')}
                    handleFocusModal={this.focusModal.bind(this, 'gigs')}
                    maxWidth="807px"
                    maxHeight="637px"
				>
					<Gigs />
				</Modal>
				<Modal
					title="about.header.title"
					hidden={this.state.about.hidden}
					zIndex={this.state.about.zIndex}
					handleOnModalClose={this.closeModal.bind(this, 'about')}
                    handleFocusModal={this.focusModal.bind(this, 'about')}
                    maxHeight="400px"
				>
					<About />
				</Modal>
				<Modal
					title="contact.header.title"
					hidden={this.state.contact.hidden}
					zIndex={this.state.contact.zIndex}
					handleOnModalClose={this.closeModal.bind(this, 'contact')}
					handleFocusModal={this.focusModal.bind(this, 'contact')}
				>
					<Contact />
				</Modal>
				<div className="background-image" />
			</div>
		);
	}
}
