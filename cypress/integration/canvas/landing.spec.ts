describe('landing', () => {
  before(() => {
    cy.visit('/');

    localStorage.setItem('alert-config', '{"skip-interface-tutorial":true}');
    localStorage.setItem('questionnaire-version', '1');
    localStorage.setItem('rating-record', '{"times":1,"version":"web","score":5,"isVoted":true,"isIgored":true}');
    localStorage.setItem('last-installed-version', 'web');
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
    cy.url().should('contain', '#/initialize/connect/flux-id-login');
    cy.get('div.flux-login').should('exist');
    cy.get('div.skip').click();
  });

  it('connection type selection page', () => {
    cy.url().should('contain', '#/initialize/connect/select-connection-type');
    cy.get('div.select-connection-type').should('exist');
    cy.get('div.btn-container').should('have.length', 3);
    cy.get('div.btn-page').click();
  });

  it('land to canvas', () => {
    console.log(document.body.innerHTML);
    cy.url().should('contain', '#/studio/beambox');
    // cy.get('div.modal-body').should('exist');
    // cy.get('button.btn-default:nth-of-type(2)').click();

  //   cy.get('div.modal-body').should('exist');
  //   cy.get('button[data-test-key="ok"]').click();
    // cy.get('button.btn-default:nth-of-type(1)').click();

  //   cy.get('div.modal-body').should('exist');
  //   cy.get('button[data-test-key="no"]').click();

  //   cy.get('div.modal-body').should('exist');
  //   cy.get('button[data-test-key="ok"]').click();

    // cy.get('#root')
    //   .find('div')
    //   .should('have.class', 'studio-container beambox-studio en');
  });
});
