/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  testMatch: ["**/tests/**/*.test.ts"],
  testTimeout: 30000,
  transform: {
    "^.+\\.(tsx|ts)?$": "ts-jest",
  },
  preset: "ts-jest"
}
