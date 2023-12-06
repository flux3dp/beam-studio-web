describe('verify shortcuts', () => {
  before(() => {
    cy.landingEditor();
  });

  it('jump to the preference page', () => {
    cy.get('body').type('{command+k}');
    cy.url().should('contain', '#/studio/settings');
  });

  it('jump to the connection type selection page', () => {
    cy.get('body').type('{option+N}');
    cy.url().should('contain', '#/initialize/connect/select-machine-model');
  });
});
