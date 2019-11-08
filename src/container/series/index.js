import React, { Component } from 'react';

class series extends Component {
	state = {
		series: [],
	};

	componentDidMount() {
		setTimeout(() => {
			fetch('http://api.tvmaze.com/search/shows?q=girls')
				.then(response => response.json())
				.then(json => this.setState({ series: json }));
		}, 2000);
	}
	render() {
		return (
			<div>
				<p>The length of series array: {this.state.series.length}</p>
			</div>
		);
	}
}

export default series;
