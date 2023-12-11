describe('Select a Machine', () => {
  it('Select a Machine', () => {
  cy.landingEditor();

  cy.get('[class*="src-web-app-components-beambox-top-bar-SelectMachineButton-module__text--"]')
    .contains('Select a machine')
    .should('exist')
    .click();
  cy.wait(4000);
  cy.get('.ant-modal-content').should('exist');
  cy.get('[class*="src-web-app-views-dialogs-Alert-module__message--"]')
    .contains('#801 We can\'t find your machine on the network')
    .should('exist');
  cy.get('a[target="_blank"][href="https://support.flux3dp.com/hc/en-us/articles/360001683556"]')
    .should('exist');
  cy.get('.ant-btn').contains('Machine Setup').should('exist');
  cy.get('.ant-btn').contains('Cancel').should('exist');
  cy.get('.ant-btn').contains('Machine Setup').click();
  cy.get('[class*="src-web-app-pages-SelectMachineModel-module__container--"]')
    .should('exist');



  });
});
