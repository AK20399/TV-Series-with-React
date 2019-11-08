import React from 'react';
import './index.css';

function seriesList(props) {
	return (
		<div>
			<ul className='seriesList'>
				{props.list.map(series => (
					<li key={series.show.id}>{series.show.name}</li>
				))}
			</ul>
		</div>
	);
}

export default seriesList;
