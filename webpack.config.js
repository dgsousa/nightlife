const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: __dirname + "/app",
	entry: "./index.jsx",
	output: {
		path: __dirname + "/public",
		filename: "app.bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: "/ndoe_modules",
				loader: "babel-loader"
			},
			{
				test: /\.(css|scss)$/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader!sass-loader"
				})
			}
		]
	},

	plugins: [ new ExtractTextPlugin("[name].css")]
}