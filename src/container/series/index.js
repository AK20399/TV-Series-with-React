import React, { Component } from 'react';
import SeriesList from '../../components/seriesList/index';

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
				<SeriesList list={this.state.series} />
			</div>
		);
	}
}

export default series;
