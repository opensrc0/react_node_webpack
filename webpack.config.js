const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const clientConfig = {
	target: 'web', // Can be omitted as default is 'web'
    entry: {
		first: './src/index.js', // For SPA
		second: './src/index.js', // For SPA 
		// page1: './src/pageone.js', // For multipage app
		// page2: './src/pagetwo.js', // For multipage app
		// vendors: './src/vendors.js' // For single page or multipage app
	},
    output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		// publicPath: "http://cdn.example.com/assets/[hash]/" // Direct cdn path for SPA
	},
	watch: true,
    module: {
        rules: [
			// { 
			// 	test: /\.text$/, 
			// 	use: 'raw-loader' 
			// },
			// { 
			// 	test: /\.css$/, 
			// 	use: [
			// 		{ loader: 'style-loader' },
			// 		{ 
			// 			loader: 'css-loader',
			// 			options: {
			// 				modules: true
			// 			}
			// 		}
			// 	]
			// },
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({template: './src/index.html'}) // For SPA direct include js in html

	]
};

// const serverConfig = {
// 	target: 'node', // Can be omitted as default is 'web'
//     entry: {
// 		app: './src/index.js', // For singlepage app 
// 		// page1: './src/pageone.js', // For multipage app
// 		// page2: './src/pagetwo.js', // For multipage app
// 		// vendors: './src/vendors.js' // For single page or multipage app
// 	},
//     output: {
// 		path: path.resolve(__dirname, 'dist'),
// 		filename: '[name].js',
// 		publicPath: "http://cdn.example.com/assets/[hash]/"
// 	}
// };

module.exports = clientConfig;