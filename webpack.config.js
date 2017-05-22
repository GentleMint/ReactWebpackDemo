var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			// adding new loader needs to restart both webpack and webpack-dev-server!!
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				loaders:[
				'style-loader',
				'css-loader?sourceMap',
				'sass-loader?sourceMap'
				]
			}
			// {
	  //           test: /\.(sass|scss)/,
	  //           loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
   //      	}
		]
	}
};