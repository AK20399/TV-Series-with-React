import React, { Component } from 'react';

class singleSeries extends Component {
	render() {
		return (
			<div>
				<p>Single Series. The id is{this.props.match.params.id}</p>
			</div>
		);
	}
}
export default singleSeries;
