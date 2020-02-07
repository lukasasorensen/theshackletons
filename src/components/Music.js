import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/Music.scss';
export default class Music extends Component {
	render() {
		return (
			<div className="music">
				<div className="music-body">
					<div className="iframe-container">
						<div className="album">
							<iframe
								src="https://bandcamp.com/EmbeddedPlayer/album=2942798964/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
								seamless
							>
								<a href="http://colincampbellandtheshackletons.bandcamp.com/album/second-attempt">
									Second Attempt by The Shackletons
								</a>
							</iframe>
						</div>
						<div className="album">
							<iframe
								src="https://bandcamp.com/EmbeddedPlayer/album=3818958578/size=large/bgcol=ffffff/linkcol=e99708/transparent=true/"
								seamless
							>
								<a href="http://colincampbellandtheshackletons.bandcamp.com/album/the-horizon-lines-ep">
									The Horizon Lines EP by The Shackletons
								</a>
							</iframe>
						</div>
						<div className="single">
							<iframe
								src="https://bandcamp.com/EmbeddedPlayer/track=1304035197/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/artwork=small/transparent=true/"
								seamless
							>
								<a href="http://colincampbellandtheshackletons.bandcamp.com/track/mcmurdo">
									McMurdo by The Shackletons
								</a>
							</iframe>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
