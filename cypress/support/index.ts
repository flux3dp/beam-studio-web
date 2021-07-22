// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

localStorage.setItem('alert-config', '{"skip-interface-tutorial":true}');
localStorage.setItem('questionnaire-version', '1');
localStorage.setItem('rating-record', '{"times":1,"version":"web","score":5,"isVoted":true,"isIgored":true}');
localStorage.setItem('last-installed-version', 'web');

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});
