import React from 'react';
import Intro from '../intro/index';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Tv Series</h1>
				</header>
				<Intro message='Here you can find all your loved Series' />
			</div>
		);
	}
}

export default App;
