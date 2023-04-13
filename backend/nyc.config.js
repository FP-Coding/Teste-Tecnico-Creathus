module.exports = {
  "extends": "@istanbuljs/nyc-config-typescript",
  "include": [
    "src/Api/Services",
    "src/Api/Controllers"
  ],
  "exclude": ['src/Models/Connection.ts'],
  "reporter": [
    "text",
    "text-summary",
    "json-summary",
    "html",
    "lcov"
  ],
  "all": true
}