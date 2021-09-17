describe('upload tools', () => {
  it('upload png', () => {
    cy.landingEditor();
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#svg_1').should('exist');
    cy.get('#width').should('have.value', '300');
    cy.get('#height').should('have.value', '210');
  });

  it('upload jpg', () => {
    cy.landingEditor();
    cy.uploadFile('map.jpg', 'image/jpg');
    cy.get('#svg_1').should('exist');
    cy.get('#width').should('have.value', '553');
    cy.get('#height').should('have.value', '387.9');
  });
});
