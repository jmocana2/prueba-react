const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx']
	},

	entry: ['./src/index.js'],
	output: {
		filename: 'app.js',
		path: '/www/moment-react/build/',
		publicPath: '/'
	},

	module: {
		loaders: [
			{ test: /(\.js)$/, exclude: /node_modules/, loaders: ['babel-loader'] },
			{ test: /\.css$/, loader: `style-loader!css-loader?${cssModules}`}
		]
	},

	devServer: {
		host: '0.0.0.0',
		port: '8080',
		inline: true
	},

	plugins: [
		new HTMLWebpackPlugin({ template: './src/assets/index.html' }),
		new ExtractTextPlugin({filename: 'style.css', allChunks: true })
	]
	
}