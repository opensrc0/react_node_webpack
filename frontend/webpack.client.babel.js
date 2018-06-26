import path from 'path';

const __APP_ENV__ = process.env.APP_ENV;
const __APP_PUBLIC_PATH__ = process.env.APP_PUBLIC_PATH;
const isProd = process.env.NODE_ENV === 'production';

var BUILD_DIR = path.resolve(__dirname, './build/client');
var APP_DIR = path.resolve(__dirname, './application/client');

const config = {
	entry: {
		main: APP_DIR + '/client.js'
	},
	mode: 'production',
	output: {
		filename: 'bundle.client.js',
		path: BUILD_DIR,
		publicPath: 'http://localhost:8090/build/client/',
	},
	devServer: {
		contentBase: BUILD_DIR,
		headers: { 'Access-Control-Allow-Origin': '*' },
	},
};

module.exports = config;