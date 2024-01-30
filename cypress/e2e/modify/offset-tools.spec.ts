it('offset', () => {
  cy.landingEditor();
  cy.get('div#left-Rectangle>img').click();
  cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('div#left-Line>img').click();
  cy.get('svg#svgcontent').trigger('mousedown', 0, -50, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 230, 250, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('div#left-Cursor>img').click();
  cy.get('svg#svgcontent').trigger('mousedown', -10, -10, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.wait(500);
  cy.get('#offset').click();
  cy.get('#select-offset-corner').select('Round');
  cy.get('.control > .ui > input').type('{selectall}{backspace}10');
  cy.get('.primary').click();
  cy.get('#w_size').should('have.value', '166.43');
  cy.get('#h_size').should('have.value', '179.17');
});
