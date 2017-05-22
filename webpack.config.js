var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

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
				loader: 'style-loader!css-loader?sourceMap!postcss'
			},
			{
				test: /\.scss$/,
				loaders:[
				'style-loader',
				'css-loader?sourceMap',
				'postcss',
				'sass-loader?sourceMap'
				]
			}
			// {
	  //           test: /\.(sass|scss)/,
	  //           loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
   //      	}
		]
	},
    postcss: function () {
        return [autoprefixer({
            browsers: ['> 1%', 'last 2 versions']
        })];
    }
};