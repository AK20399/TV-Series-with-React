import React from 'react';

class intro extends React.Component {
	render() {
		return (
			<div>
				<h4>{this.props.message}</h4>
			</div>
		);
	}
}

export default intro;
