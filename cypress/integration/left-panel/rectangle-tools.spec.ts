it('rounded corner', () => {
  cy.landingEditor();
  cy.get('div#left-Rectangle>img').click();
  cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('div.option-input > input').dblclick();
  cy.get('div.option-input > input').clear().type('40').blur();
  cy.get('#svg_1').should('have.attr', 'rx').and('eq', '400');
});
