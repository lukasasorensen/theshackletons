import React, { Component } from 'react';
import Processing from './Processing';
import '../styles/Gigs.scss';
export default class Gigs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }
    onFinishLoading() {
		console.log('%c finished loading!', 'background: green; color: #fff');
		this.setState({ loading: false });
	}
	render() {
		return (
			<div className="gigs w-100 h-100">
				<div className="gigs-body w-100 h-100">
                    {this.state.loading ? <Processing /> : null}
					<div className={`iframe-container ${this.state.loading ? 'vis-hidden' : ''}`}><iframe src="https://calendar.google.com/calendar/embed?src=theshackletonspubliccalendar%40gmail.com&ctz=America%2FChicago" onLoad={this.onFinishLoading.bind(this)} width="800" height="600" frameBorder="0" scrolling="no"></iframe></div>
				</div>
			</div>
		);
	}
}
