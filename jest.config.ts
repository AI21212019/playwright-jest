import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'jest-playwright-preset',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  },
  verbose: true,
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['chromium', 'firefox', 'webkit'],
      launchOptions: {
        headless: false
      }
    }
  }
};
export default config;
