import React from 'react';

class intro extends React.Component {
	state = {
		series: [],
	};

	render() {
		return (
			<div>
				<p>{this.props.message}</p>
				<p>The length of series array: {this.state.series.length}</p>
			</div>
		);
	}
}

export default intro;
