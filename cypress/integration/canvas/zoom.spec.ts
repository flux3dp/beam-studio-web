it('zoom in/out', () => {
  cy.landing();

  cy.get('div.zoom-btn.zoom-out').should('exist');
  cy.get('div.zoom-ratio').should('exist');
  cy.get('div.zoom-btn.zoom-in').should('exist');

  cy.get('div.zoom-ratio').should('have.text', '100%');

  cy.get('div.zoom-btn.zoom-in').click();
  cy.get('div.zoom-ratio').should('have.text', '110%');
  cy.get('div.zoom-btn.zoom-out').click();
  cy.get('div.zoom-ratio').should('have.text', '100%');
});
