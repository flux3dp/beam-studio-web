describe('reset', () => {
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
    cy.get('.btn').contains('Next').click()
    cy.get('.ant-modal-close-x').should('exist').click();
    cy.get('.src-web-app-pages-SelectMachineModel-module__btn--vSspa').contains('Skip').click();
    cy.get('.ant-modal-footer button.ant-btn-primary').click();
    cy.get('.top-bar-menu-container').should('exist').click();
    cy.contains('.rc-menu__item', 'File').click();
    cy.contains('.rc-menu__item', 'Preferences').click();
    cy.get('#set-default-units').contains('mm').should('exist');
  });

  it('reset-openbottom/autofocus/diodelaser', () => {
    cy.get('.top-bar-menu-container').should('exist').click();
    cy.contains('.rc-menu__item', 'File').click();
    cy.contains('.rc-menu__item', 'Preferences').click();
    cy.get('#default-open-bottom').select('On');
    cy.get('#default-autofocus').select('On');
    cy.get('#default-diode').select('On');
    cy.get('[class="btn btn-done"]').click();
    cy.get('.top-bar-menu-container').should('exist').click();
    cy.contains('.rc-menu__item', 'File').click();
    cy.contains('.rc-menu__item', 'Preferences').click();
    cy.get('.font5').click();
    cy.get('.btn').contains('Next').click()
    cy.get('.ant-modal-close-x').should('exist').click();
    cy.get('.src-web-app-pages-SelectMachineModel-module__btn--vSspa').contains('Skip').click();
    cy.get('.ant-modal-footer button.ant-btn-primary').click();
    cy.get('.top-bar-menu-container').should('exist').click();
    cy.contains('.rc-menu__item', 'File').click();
    cy.contains('.rc-menu__item', 'Preferences').click();
    cy.get('#default-open-bottom').should('have.value', 'FALSE');
    cy.get('#default-autofocus').should('have.value', 'FALSE');
    cy.get('#default-diode').should('have.value', 'FALSE');
  });
})
