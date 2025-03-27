const nextJest = require('next/jest')

/**
 * @type {import('jest').Config}
 */
const createJestConfig = nextJest({
  dir: './', // The root of your project (usually the same as where this file is located)
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom', // Specify jsdom explicitly
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // Automatically import jest-dom matchers
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock static files
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use Babel for transformations
  },
}

module.exports = createJestConfig(customJestConfig)
