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
  window.localStorage.setItem('did-gesture-tutorial', '1');
};

Cypress.Commands.add('landingEditor', (opts = {}) => {
  setStorage();
  cy.visit('/#/initialize/connect/flux-id-login', opts);
  cy.on('window:load', (win) => {
    // eslint-disable-next-line no-param-reassign
    win.onbeforeunload = null;
  });
  cy.contains('Work Offline').click();
  // time for svgcanvas loading
  cy.wait(1000);
});

Cypress.Commands.add('loginAndLandingEditor', (opts = {}) => {
  setStorage();
  cy.visit('/#/initialize/connect/flux-id-login', opts);
  cy.on('window:load', (win) => {
    // eslint-disable-next-line no-param-reassign
    win.onbeforeunload = null;
  });
  const username = Cypress.env('username');
  const password = Cypress.env('password');
  cy.get('input#email-input').type(username);
  cy.get('input#password-input').type(password);
  cy.get('button[class^="ant-btn"]').contains('Login').click({ force: true });
  cy.get('.ant-modal-content').should('exist').and('have.text', 'Successfully logged in.OK');
  cy.contains('button span', 'OK').click();
  // time for svgcanvas loading
  cy.wait(1000);
});

Cypress.Commands.add('uploadFile', (fileName: string, fileType) => {
  cy.get('input[data-file-input="import_image"').then(($input) => {
    cy.fixture(fileName, 'base64')
      .then(Cypress.Blob.base64StringToBlob)
      .then((blob) => {
        const el = $input[0] as HTMLInputElement;
        const testFile = new File([blob], fileName, { type: fileType });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(testFile);
        el.files = dataTransfer.files;
        return cy.wrap($input).first().trigger('change', { force: true });
      });
  });
});

Cypress.Commands.add('dragTo', { prevSubject: 'element' }, (subject, targetEl) => {
  cy.wrap(subject).trigger('dragstart', { force: true });
  cy.get(targetEl).trigger('dragenter', { force: true });
  cy.get(targetEl).trigger('dragend', { force: true });
});

Cypress.Commands.add('disableImageDownSampling', () => {
  const bbPref = JSON.parse(window.localStorage.getItem('beambox-preference'));
  bbPref.image_downsampling = false;
  window.localStorage.setItem('beambox-preference', JSON.stringify(bbPref));
});

Cypress.Commands.add('setUpBackend', (ip: string) => {
  window.localStorage.setItem('host', ip);
});

Cypress.Commands.add('connectMachine', (machineName: string) => {
  cy.findAllByTestId('select-machine').should('exist');
  cy.findAllByTestId('select-machine').click();
  cy.findAllByText(machineName).should('exist');
  cy.findAllByText(machineName).click();
  cy.get('.ant-modal-footer').get('.ant-btn-primary', { timeout: 10000 }).contains('Yes').click();
});

Cypress.Commands.add('go2Preference', () => {
  cy.get('div.top-bar-menu-container').click();
  cy.get('li.rc-menu__submenu').should('have.length', 6);
  cy.get('li.rc-menu__submenu:nth-child(1)').trigger('mouseover');
  cy.get('li.rc-menu__submenu:nth-child(1) li.rc-menu__item:last-child').click({
    force: true,
  });
});

Cypress.Commands.add('checkToolBtnActive', (id: string, active = true) => {
  cy.get(`div#left-${id}`).should('exist');
  cy.get(
    `div#left-${id}[class*='src-web-app-components-beambox-left-panel-LeftPanelButton-module__active--']`
  ).should(active ? 'exist' : 'not.exist');
});

Cypress.Commands.add('clickToolBtn', (id: string) => {
  cy.get(`div#left-${id}`).should('exist');
  cy.get(`div#left-${id}`).click();
  cy.checkToolBtnActive(id);
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
