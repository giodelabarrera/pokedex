const path = require('path')
const resolve = require('resolve')

process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'
process.env.PUBLIC_URL = ''

require('react-scripts/config/env')

module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.js'],
  testEnvironment: resolve.sync('jest-environment-jsdom', {
    basedir: require.resolve('jest'),
  }),
  moduleDirectories: ['node_modules', path.join(__dirname, './src')],
  transform: {
    '^.+\\.(js|jsx)$': require.resolve(
      'react-scripts/config/jest/babelTransform',
    ),
    '^.+\\.css$': require.resolve('react-scripts/config/jest/cssTransform.js'),
    '^(?!.*\\.(js|jsx|css|json)$)': require.resolve(
      'react-scripts/config/jest/fileTransform.js',
    ),
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  resetMocks: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!<rootDir>/node_modules/**/*',
    '!<rootDir>/src/test/**/*',
  ],
}
