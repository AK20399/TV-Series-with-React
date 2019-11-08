import React from 'react';
import loading from '../../assets/loading.gif';

function Loader(props) {
	return (
		<div>
			<img src={loading} alt='loading' />
		</div>
	);
}

export default Loader;
