import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../container/series/index';
import SingleSeries from '../../container/singleSeries';

function main(props) {
	return (
		<Switch>
			<Route exact path='/' component={Series} />
			<Route exact path='/series:id' component={SingleSeries} />
		</Switch>
	);
}

export default main;
