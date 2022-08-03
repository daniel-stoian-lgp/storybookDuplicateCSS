const path = require('path');

module.exports = async ({ config, mode }) => {
	console.dir(config.plugins, { depth: null }) || config;
	// `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
	// You can change the configuration based on that.
	// 'PRODUCTION' is used when building the static version of storybook

	// Make whatever fine-grained changes you need
	config.module.rules.push({
		test: /\.less$/,
		use: [
			{
				loader: "style-loader"
			},
			{
				loader: "css-loader",
				options: {
					sourceMap: true,
					modules: true
				}
			},
			{
				loader: "less-loader",
				options: {
					lessOptions: {
						modules: true,
						sourceMap: true,
						strictMath: true
					},
			} }
		],
		include: path.resolve(__dirname, '../')
	});

	// Return the altered config
	return config;
}
