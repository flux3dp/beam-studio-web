describe('landing', () => {
  before(() => {
    cy.visit('/');
  });

  it('home page', () => {
    cy.url().should('contain', '#/');
    cy.get('div.home').should('exist');
    cy.get('h1.headline').should('have.text', 'Select Language');
    cy.get('select#select-lang').select('zh-tw');
    cy.get('h1.headline').should('have.text', '請選擇你想使用的語言');
    cy.get('select#select-lang').select('en');
    cy.get('a.btn').click();
  });

  it('flux login page', () => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    cy.url().should('contain', '#/initialize/connect/flux-id-login');
    cy.get('div.flux-login').should('exist');
    cy.get('input#email-input').type(username);
    cy.get('input#password-input').type(password);
    cy.get('div.remember-me').click();
    cy.get('div.primary').click();
  });

  it('connection type selection page', () => {
    cy.url().should('contain', '#/initialize/connect/select-connection-type');
    cy.get('div.select-connection-type').should('exist');
    cy.get('div.btn-container').should('have.length', 4);
    cy.get('div.btn-page').click();
  });

  it('land to canvas', () => {
    window.localStorage.setItem('new-user', 'true');
    cy.url().should('contain', '#/studio/beambox');

    // Sentry
    cy.get('div.modal-body').should('exist');
    cy.get('button[data-test-key="no"]').click();

    // Camera Calibration
    cy.get('body')
      .then((body) => {
        if (body.find('div.modal-body').length > 0) {
          cy.get('button[data-test-key="no"]').click();
          cy.get('div.modal-body').should('exist');
          cy.get('button[data-test-key="ok"]').click();
        }
      });
    // Tutorial
    cy.get('body')
      .then((body) => {
        if (body.find('div.modal-body').length > 0) {
          cy.get('button[data-test-key="no"]').click();
          cy.get('div.modal-body').should('exist');
          cy.get('button[data-test-key="ok"]').click();
        }
      });

    cy.get('#root')
      .find('div')
      .should('have.class', 'studio-container beambox-studio en');
  });
});
