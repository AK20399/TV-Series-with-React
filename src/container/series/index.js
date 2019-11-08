import React, { Component } from 'react';
import Intro from '../../components/intro/index';
import SeriesList from '../../components/seriesList/index';
import Loader from '../../components/Loader/index';
import './index.css';

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
				<Intro message='Here you can find all your loved Series' />
				<div>
					<input
						value={seriesName}
						type='text'
						onChange={this.onSeriesInputChange}
						placeholder='Enter Series Name'
					/>
				</div>
				{!isFetching && series.length === 0 && seriesName.trim() === '' && (
					<h4>Please Enter Series Name</h4>
				)}
				{!isFetching && series.length === 0 && seriesName.trim() !== '' && (
					<h4>No Series has been Found By This Name</h4>
				)}
				{isFetching === true && <Loader />}
				{isFetching === false && <SeriesList list={this.state.series} />}
			</div>
		);
	}
}

export default series;
