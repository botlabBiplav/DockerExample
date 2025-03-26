// jest.config.js
module.exports = {
    preset: 'next/jest', // Using next/jest preset
    testEnvironment: 'jest-environment-jsdom', // Use jsdom as test environment
    moduleNameMapper: {
      // Handle static file imports (CSS, images, etc.)
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use Babel for transformation
    },
  };
  