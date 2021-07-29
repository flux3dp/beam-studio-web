describe('verify shortcuts', () => {
  before(() => {
    cy.landing();
  });

  it('jump to the preference page', () => {
    cy.get('body').type('{command+k}')
    cy.url().should('contain', '#/studio/settings');
  });
});
