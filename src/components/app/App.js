import React from 'react';
import './App.css';
import Main from '../main/index';
import 'whatwg-fetch';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Tv Series</h1>
				</header>
				<Main />
			</div>
		);
	}
}

export default App;
