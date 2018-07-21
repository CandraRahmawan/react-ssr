module.exports = {
  setupFiles: ['<rootDir>/test/setup.js'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js}', '!**/node_modules/**'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 30,
      lines: 15,
      statements: 15,
    },
  },
  coverageDirectory: '__coverage__',
};
