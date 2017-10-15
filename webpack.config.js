const path = require("path");

module.exports = {
	entry: "./src/App.jsx",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
		        use: [
		            'style-loader',
		            'css-loader'
		        ]
			},
			{
				test:  /\.js$/,
				loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
				exclude: /node_modules/,
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
	            	presets:[ 'es2015', 'react', 'stage-2' ]
	            }
			}
		]
	}
}