it('layer panel', () => {
  cy.landing();

  cy.get('div.layer').should('have.length', 1);
  cy.get('div.layer').should('have.class', 'current');

  cy.get('div.add-layer-btn').should('exist');
  cy.get('div.add-layer-btn').click();
  cy.get('div.layer').should('have.length', 2);
  cy.get('div.layer:nth-child(1)').should('have.class', 'current');
  cy.get('div.layer:nth-child(2)').should('not.have.class', 'current');
});
