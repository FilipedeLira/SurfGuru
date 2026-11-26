const { defineConfig } = require('cypress');
module.exports = defineConfig({
  retries: { runMode: 1, openMode: 0 },
  e2e: { baseUrl: 'https://surfguru.com.br', defaultCommandTimeout: 15000, testIsolation: true, supportFile: false },
  video: false
});
