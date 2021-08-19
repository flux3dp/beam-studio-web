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
Cypress.Commands.add('landing', (opts = {}) => {
  const username = Cypress.env('username');
  const password = Cypress.env('password');
  cy.visit('/', opts);
  cy.get('select#select-lang').select('en');
  cy.get('a.btn').click();
  cy.get('input#email-input').type(username);
  cy.get('input#password-input').type(password);
  cy.get('div.primary').click();
  cy.get('div.btn-page').click();
  cy.get('button[data-test-key="no"]').click();
  cy.get('button[data-test-key="ok"]').click();
  cy.get('button[data-test-key="no"]').click();
  cy.get('button[data-test-key="ok"]').click();
});

Cypress.Commands.add('landingEditor', (opts = {}) => {
  window.localStorage.setItem('printer-is-ready', 'true');
  cy.visit('/', opts);
  cy.get('button[data-test-key="no"]').click();
  cy.get('button.primary').click();
  cy.get('button[data-test-key="no"]').click();
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
