it('rounded corner', () => {
  cy.landing();
  cy.get('div#left-Rectangle>img').click();
  cy.get('svg#svgcontent').trigger('mousedown', 150, 150, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('#svg_1').should('exist');

  cy.get('.option-input > input').dblclick().clear().type('30').blur();
  cy.get('.option-input > input').should('have.attr', 'value').and('eq' ,'30.00');
  cy.get('#svg_1').should('have.attr', 'rx').and('eq', '300');
});
