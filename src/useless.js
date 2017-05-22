// this file is not required by other files
// it should not been bundled into bundle.js
import React from 'react';
import ReactDOM from 'react-dom';
import World from './world';

class Useless extends React.Component {
	render() {
		return <div>Useless</div>;
	}
}

export default Useless;