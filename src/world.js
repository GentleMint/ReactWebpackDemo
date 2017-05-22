import React from 'react';
import ReactDOM from 'react-dom';
// import Useless from './useless';

class World extends React.Component {
	render() {
		return <h1>World</h1>;
	}
}

function fn() {
	console.log('WorldJavaScriptInFunction');
}
console.log('WorldJavaScriptOutFunction');

export default World;