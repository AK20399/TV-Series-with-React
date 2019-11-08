import React from 'react';
import './index.css';
import SeriesListItem from '../seriesListItem/index';

function seriesList(props) {
	return (
		<div>
			<ul className='seriesList'>
				{props.list.map(series => (
					<SeriesListItem key={series.show.id} series={series} />
				))}
			</ul>
		</div>
	);
}

export default seriesList;
