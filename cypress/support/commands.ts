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

const setStorage = () => {
  window.localStorage.setItem('printer-is-ready', 'true');
  window.localStorage.setItem('keep-flux-id-login', 'true');
  window.localStorage.setItem('enable-sentry', '0');
  window.localStorage.setItem('alert-config', JSON.stringify({
    'skip-interface-tutorial': true,
    'done-first-cali': true,
  }));
  window.localStorage.setItem('last-installed-version', 'web');
  window.localStorage.setItem('questionnaire-version', '9999');
}

Cypress.Commands.add('landingEditor', (opts = {}) => {
  setStorage();
  cy.visit('/#/initialize/connect/flux-id-login', opts);
  cy.on('window:load', (win) => {
    win.onbeforeunload = null;
  });
  cy.get('.skip').click();
  // time for svgcanvas loading
  cy.wait(700);
});

Cypress.Commands.add('loginAndLandingEditor', (opts = {}) => {
  setStorage();
  cy.visit('/#/initialize/connect/flux-id-login', opts);
  cy.on('window:load', (win) => {
    win.onbeforeunload = null;
  });
  const username = Cypress.env('username');
  const password = Cypress.env('password');
  cy.get('input#email-input').type(username);
  cy.get('input#password-input').type(password);
  cy.get('div.primary').click();
  cy.get('button[data-test-key="ok"]').click();
  // time for svgcanvas loading
  cy.wait(700);
});

Cypress.Commands.add('uploadFile', (fileName, fileType) => {
  cy.get('input[data-file-input="import_image"').then($input => {
    cy.fixture(fileName, 'base64')
      .then(Cypress.Blob.base64StringToBlob)
      .then(blob => {
        const el = $input[0];
        const testFile = new File([blob], fileName, { type: fileType });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(testFile);
        el.files = dataTransfer.files;
        return cy.wrap($input).first().trigger('change', { force: true });
      });
  });
});

Cypress.Commands.add('dragTo', { prevSubject: "element" }, (subject, targetEl) => {
  cy.wrap(subject).trigger('dragstart', { force: true });
  cy.get(targetEl).trigger('dragenter', { force: true });
  cy.get(targetEl).trigger('dragend', { force: true });
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
