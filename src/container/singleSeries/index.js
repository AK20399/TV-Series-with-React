import React, { Component } from 'react';
import Loader from '../../components/Loader/index';

class singleSeries extends Component {
	state = {
		show: null,
	};

	componentDidMount() {
		const { id } = this.props.match.params;

		fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
			.then(response => response.json())
			.then(json => this.setState({ show: json }));
	}
	render() {
		const { show } = this.state;
		console.log(show);

		return (
			<div>
				{show === null && <Loader />}
				{show !== null && (
					<div>
						<br />
						<h2>
							<a href='/'>
								<u>Go Back</u>
							</a>
						</h2>
						<h1>{show.name}</h1>
						<p>
							<img
								src={show.image.original}
								style={{ width: 300 }}
								alt='Show'
							/>
						</p>
						<h4>Rating : {show.rating.average}</h4>
						<h4>Premiered : {show.premiered}</h4>
						<h4>Episodes : {show._embedded.episodes.length}</h4>
						<h4>Status: {show.status}</h4>
						<h4>Language: {show.language}</h4>
					</div>
				)}
			</div>
		);
	}
}
export default singleSeries;
