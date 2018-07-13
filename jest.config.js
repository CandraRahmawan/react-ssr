module.exports = {
  setupFiles: ['<rootDir>/test/setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js}',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 30,
      lines: 2,
      statements: 2
    }
  },
  coverageDirectory: '__coverage__'
};