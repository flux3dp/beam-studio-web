// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('landingEditor', (opts = {}) => {
  const username = Cypress.env('username');
  const password = Cypress.env('password');

  window.localStorage.setItem('printer-is-ready', 'true');
  window.localStorage.setItem('keep-flux-id-login', 'true');
  window.localStorage.setItem('enable-sentry', '0');
  window.localStorage.setItem('alert-config', JSON.stringify({
    'skip-interface-tutorial': true,
  }));
  window.localStorage.setItem('last-installed-version', 'web');
  window.localStorage.setItem('questionnaire-version', '9999');
  cy.visit('/#/initialize/connect/flux-id-login', opts);
  cy.get('input#email-input').type(username);
  cy.get('input#password-input').type(password);
  cy.get('div.primary').click();
  cy.get('button[data-test-key="ok"]').click();
  // time for svgcanvas loading
  cy.wait(500);
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
