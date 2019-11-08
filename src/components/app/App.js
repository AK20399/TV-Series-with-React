import React from 'react';
import Intro from '../intro/index';
import './App.css';

class App extends React.Component {
	state = {
		series: [],
	};

	componentDidMount() {
		const series = ['vikings', 'game of thrones'];

		setTimeout(() => {
			this.setState({ series });
		}, 1000);
	}

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Tv Series</h1>
				</header>
				<Intro message='Here you can find all your loved Series' />
				<p>The length of series array: {this.state.series.length}</p>
			</div>
		);
	}
}

export default App;
