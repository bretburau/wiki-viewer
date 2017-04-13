var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
				{
       			test: /\.css$/,
        		use: ExtractTextPlugin.extract({
          			fallback: "style-loader",
          			use: "css-loader",
          			publicPath: '/dist'
        			})
     			},
     			{
					test: /\.js$/, // include .js files
					enforce: "pre", // preload the jshint loader
					exclude: /node_modules/, // exclude any and all files in the node_modules folder
					use: [
						{
							loader: "jshint-loader"
						}
					]
				}
				]
	},
	devServer: {
		  contentBase: path.join(__dirname, "dist"),
		  compress: true,
		  port: 8080,
		  open: true
	},
	plugins: [new HtmlWebpackPlugin({
    	title: 'Wikipedia Viewer',
    	minify: {
    		collapseWhitespace: true
    	},
    	template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
  	}),
	new ExtractTextPlugin({
    	filename: "bundle.css",
    	disable: false,
    	allChunks: true
  	})
	]
}