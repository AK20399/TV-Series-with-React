import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../container/series/index';

function main(props) {
	return (
		<Switch>
			<Route exact path='/' component={Series} />
		</Switch>
	);
}

export default main;
