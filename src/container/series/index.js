import React, { Component } from 'react';
import SeriesList from '../../components/seriesList/index';

class series extends Component {
	state = {
		series: [],
	};

	onSeriesInputChange = e => {
		fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
			.then(response => response.json())
			.then(json => this.setState({ series: json }));
	};

	render() {
		return (
			<div>
				{/* <p>The length of series array: {this.state.series.length}</p> */}
				<div>
					<input
						type='text'
						onChange={this.onSeriesInputChange}
						placeholder='Enter Series Name'
					/>
				</div>
				<SeriesList list={this.state.series} />
			</div>
		);
	}
}

export default series;
