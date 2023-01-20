module.exports = {
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: { jsx: true }
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
	plugins: ['prettier', 'react'],
	parser: 'vue-eslint-parser',
	rules: {
		'prettier/prettier': ['error']
	},
	env: { browser: true, node: true, mocha: true, jest: true }
};
