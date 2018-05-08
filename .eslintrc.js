module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
	},
	env: {
		browser: true,
	},
	/*extends: 'airbnb-base',*/
	plugins: [
		'html'
	],
	'settings': {
		'import/resolver': {
			'webpack': {
				'config': 'build/webpack.base.conf.js'
			}
		}
	},
	'rules': {
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
}