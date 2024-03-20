it('decompose', () => {
  cy.landingEditor();
  cy.clickToolBtn('Element');
  cy.get('[class="ant-modal-header"]').contains('Element').should('exist');
  cy.get('.anticon[class*="src-web-app-views-beambox-ShapePanel-ShapePanel-module__icon"]')
    .eq(12)
    .click();
  cy.get('#svg_9').should('exist').click({ force: true });
  cy.get('button#decompose_path').click();
  cy.get('#svg_10')
    .should('exist')
    .should('have.attr', 'stroke', '#333333')
    .should(
      'have.attr',
      'd',
      'M249.99999,499.99998C388.07165,499.99998 499.99998,388.07165 499.99998,249.99999C499.99998,111.92833 388.07165,0 249.99999,0C111.92833,0 0,111.92833 0,249.99999C0,388.07165 111.92833,499.99998 249.99999,499.99998z'
    )
    .should('have.attr', 'fill-opacity', '0');
  cy.get('#svg_11')
    .should('exist')
    .should('have.attr', 'stroke', '#333333')
    .should(
      'have.attr',
      'd',
      'M249.99999,399.99998C332.84332,399.99998 399.99998,332.84332 399.99998,249.99999C399.99998,167.15666 332.84332,100 249.99999,100C167.15666,100 100,167.15666 100,249.99999C100,332.84332 167.15666,399.99998 249.99999,399.99998z'
    )
    .should('have.attr', 'fill-opacity', '0');
});
