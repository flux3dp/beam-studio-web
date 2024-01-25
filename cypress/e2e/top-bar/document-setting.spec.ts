describe('document-setting', () => {
    beforeEach(() => {
        cy.landingEditor();
      });    

  it('document-setting', () => {
    cy.get('.top-bar-menu-container').should('exist').click();
    cy.contains('.rc-menu__item', 'File').click();
    cy.contains('.rc-menu__item', 'Preferences').click();
    cy.get('#set-default-model').select('HEXA');
    cy.get('.btn.btn-done').click();
    cy.get('.top-bar-menu-container').should('exist').click();
    cy.contains('.rc-menu__item', 'Edit').click();
    cy.contains('.rc-menu__item', 'Document Settings').click();
    cy.get('.ant-select-selection-item').contains('HEXA').should('exist')


  });

})
