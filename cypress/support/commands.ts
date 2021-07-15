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
Cypress.Commands.add('landing', () => {
  cy.visit('/');
  cy.get('select#select-lang').select('en');
  cy.get('a.btn').click();
  cy.get('div.skip').click();
  cy.get('div.btn-page').click();
  cy.get('button[data-test-key="no"]').click();
  cy.get('button[data-test-key="ok"]').click();
  cy.get('button[data-test-key="no"]').click();
  cy.get('button[data-test-key="ok"]').click();
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
