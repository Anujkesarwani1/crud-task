module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/**/*.{ts,tsx}',
      '!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}',
      '!src/themes/**',
      '!src/services/**',
      '!src/pages/**',
      '!src/**/*.{d,stories}.{ts,tsx}',
      '!src/declarations.d.ts',
      '!src/App.tsx',
      '!src/**/*.{d,stories}.{ts,tsx}',
      '!src/index.tsx',
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
      '^.+\\.css$': 'jest-transform-stub',
      '^.+\\.png$': 'jest-transform-stub',
      '^.+\\.(ts|tsx)$': 'jest-transform-stub',
    },
    moduleNameMapper: {
      '^.+\\.(svg|gif)$': 'jest-svg-transformer',
      '\\.(css)$': 'identity-obj-proxy',
      '^.+\\.(ts|tsx)$': 'jest-transform-stub',
      '\\.(svg)$': 'jest-svg-transformer',
    },
  }