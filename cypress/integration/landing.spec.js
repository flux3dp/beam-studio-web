describe('landing', () => {
  it('successfully loads', () => {
    cy.visit('/');

    cy.get('div.home').should('exist');
    cy.get('h1.headline').should('have.text', 'Select Languag');
    cy.get('select#select-lang').select('zh-tw');
    cy.get('h1.headline').should('have.text', '請選擇你想使用的語言');
    cy.get('select#select-lang').select('en');
    cy.get('a.btn').click();

    cy.get('div.flux-login').should('exist');
    cy.get('div.skip').click();

    cy.get('div.select-connection-type').should('exist');
    cy.get('div.btn-container').should('have.length', 3);
    cy.get('div.btn-page').click();

    cy.get('div.modal-body').should('exist');
    cy.get('button[data-test-key="no"]').click();

    cy.get('div.modal-body').should('exist');
    cy.get('button[data-test-key="ok"]').click();

    cy.get('div.modal-body').should('exist');
    cy.get('button[data-test-key="no"]').click();

    cy.get('div.modal-body').should('exist');
    cy.get('button[data-test-key="ok"]').click();

    cy.get('#root')
      .find('div')
      .should('have.class','studio-container beambox-studio en')
  })
});

