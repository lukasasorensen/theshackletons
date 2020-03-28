import React, { Component, Suspense, lazy } from 'react';
import Header from './Header';
import Modal from './Modal';
import headerLinks from '../constants/headerLinks';
import Processing from './Processing';
import '../styles/Home.scss';

const Gigs = lazy(() => import('./Gigs'));
const Music = lazy(() => import('./Music'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));

export default class Home extends Component {
	constructor(props) {
		super(props);
    
		const defaultModalState = {
            hidden: true,
            inFocus: false,
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
        var self = this;
        self.headerLinks = headerLinks;

        headerLinks.forEach(modal => {
            if (modal.id !== modalId) {
                this.updateModal(modal.id, 'inFocus', false);
            }
        });
        this.updateModal(modalId, 'inFocus', true, function() {
            let highestIndex = Math.max(...self.headerLinks.map((modal) => self.state[modal.id].zIndex));
            highestIndex++;
		    self.setState({ [modalId]: { ...self.state[modalId], zIndex: highestIndex } }, () => console.log(JSON.stringify(self.state, null, 2)));
        });
	}

	updateModal(modalId, prop, value, callback) {
		this.setState(
			(state) => {
				let modal = { ...state[modalId] };
				modal[prop] = value;
				return { [modalId]: modal };
			},
			() => { if (callback) callback(); }
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
                    inFocus={this.state.music.inFocus}
					zIndex={this.state.music.zIndex}
					handleOnModalClose={this.closeModal.bind(this, 'music')}
                    handleFocusModal={this.focusModal.bind(this, 'music')}
                    maxWidth="700px"
                    maxHeight="820px"
				>
                    <Suspense fallback={<Processing />}>
					    <Music />
                    </Suspense>
				</Modal>
				<Modal
					title="gigs.header.title"
                    hidden={this.state.gigs.hidden}
                    inFocus={this.state.gigs.inFocus}
					zIndex={this.state.gigs.zIndex}
					handleOnModalClose={this.closeModal.bind(this, 'gigs')}
                    handleFocusModal={this.focusModal.bind(this, 'gigs')}
                    maxWidth="820px"
                    maxHeight="650px"
				>
                    <Suspense fallback={<Processing />}>
					    <Gigs />
                    </Suspense>
				</Modal>
				<Modal
					title="about.header.title"
                    hidden={this.state.about.hidden}
                    inFocus={this.state.about.inFocus}
					zIndex={this.state.about.zIndex}
					handleOnModalClose={this.closeModal.bind(this, 'about')}
                    handleFocusModal={this.focusModal.bind(this, 'about')}
                    maxHeight="400px"
				>
                    <Suspense fallback={<Processing />}>
					    <About />
                    </Suspense>
				</Modal>
				<Modal
					title="contact.header.title"
                    hidden={this.state.contact.hidden}
                    inFocus={this.state.contact.inFocus}
					zIndex={this.state.contact.zIndex}
					handleOnModalClose={this.closeModal.bind(this, 'contact')}
                    handleFocusModal={this.focusModal.bind(this, 'contact')}
                    maxHeight="200px"
                    maxWidth="500px"
				>
                    <Suspense fallback={<Processing />}>
					    <Contact />
                    </Suspense>
				</Modal>
				<div className="background-image" />
			</div>
		);
	}
}
