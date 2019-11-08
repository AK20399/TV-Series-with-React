import React from 'react';
import { Link } from 'react-router-dom';

function SeriesListItem({ series }) {
	return (
		<li>
			<Link to={`series/${series.show.id}`}>{series.show.name}</Link>
		</li>
	);
}

export default SeriesListItem;
