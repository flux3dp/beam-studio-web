describe('reset-all', () => {
    beforeEach(() => {
        cy.landingEditor();
      });    

  it('reset-all', () => {
    cy.get('.top-bar-menu-container').should('exist').click();
    cy.contains('.rc-menu__item', 'File').click();
    cy.contains('.rc-menu__item', 'Preferences').click();
    cy.get('#set-default-units').select('Inches');
    cy.get('.btn.btn-done').click();
    cy.wait(1000);
    cy.get('.top-bar-menu-container').should('exist').click();
    cy.contains('.rc-menu__item', 'File').click();
    cy.contains('.rc-menu__item', 'Preferences').click();
    cy.get('.font5').click();
    cy.get('a.btn.btn-action.btn-lar  ge[href="#initialize/connect/flux-id-login"]').click()
    cy.get('.ant-modal-close-x').should('exist').click();
    cy.get('.src-web-app-pages-SelectMachineModel-module__btn--vSspa').contains('Skip').click();
    cy.get('.ant-modal-footer button.ant-btn-primary').click();
    cy.get('.top-bar-menu-container').should('exist').click();
    cy.contains('.rc-menu__item', 'File').click();
    cy.contains('.rc-menu__item', 'Preferences').click();
    cy.get('#set-default-units').contains('mm').should('exist');
  })
})