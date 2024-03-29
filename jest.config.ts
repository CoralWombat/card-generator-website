/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/node_modules/**',
    ],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    roots: [
        '<rootDir>/src'
    ],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    },
    transformIgnorePatterns: ["node_modules/(?!csv-parse)"],
    coverageReporters: ['json-summary', 'text', 'lcov']
};

export default config;
