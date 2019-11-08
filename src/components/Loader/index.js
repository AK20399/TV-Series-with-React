import React from 'react';
import loading from '../../assets/loading.gif';

function Loader(props) {
	return (
		<div>
			<img style={{ width: 200 }} src={loading} alt='loading' />
		</div>
	);
}

export default Loader;
