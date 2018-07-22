module.exports = {
  setupFiles: ['<rootDir>/test/setup.js'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js}'],
  verbose: true,
  bail: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 75,
      statements: 75,
    },
  },
  coverageDirectory: '__coverage__',
  transform: {
    '\\.txt$': 'jest-raw-loader',
    '\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
};
