import React, { Component } from 'react';
import SeriesList from '../../components/seriesList/index';
import Loader from '../../components/Loader/index';

class series extends Component {
	state = {
		series: [],
		seriesName: '',
		isFetching: false,
	};

	onSeriesInputChange = e => {
		this.setState({ seriesName: e.target.value, isFetching: true });

		fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
			.then(response => response.json())
			.then(json => this.setState({ series: json, isFetching: false }));
	};

	render() {
		const { series, seriesName, isFetching } = this.state;

		return (
			<div>
				{/* <p>The length of series array: {this.state.series.length}</p> */}
				<div>
					<input
						value={seriesName}
						type='text'
						onChange={this.onSeriesInputChange}
						placeholder='Enter Series Name'
					/>
				</div>
				{!isFetching && series.length === 0 && seriesName.trim() === '' && (
					<p>Please Enter Series Name</p>
				)}
				{!isFetching && series.length === 0 && seriesName.trim() !== '' && (
					<p>No Series has been Found By This Name</p>
				)}
				{isFetching === true && <Loader />}
				{isFetching === false && <SeriesList list={this.state.series} />}
			</div>
		);
	}
}

export default series;
