const { defaults } = require('jest-config');

module.exports = {
	...defaults,
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy'
	},
	snapshotSerializers: ['jest-styled-components']
};
