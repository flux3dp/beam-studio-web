it('snap to vertices', () => {
  cy.landingEditor();
  cy.clickToolBtn('Pen');
  cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('svg#svgcontent').trigger('mousedown', 150, 150, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 150, 0, { force: true });
  cy.get('svg#svgcontent').trigger('mousedown', 150, 0, { force: true });
  cy.get('#drawingPoint_2').should(($value) => {
    expect($value.attr('cx')).to.be.closeTo(250, 1);
  });
  cy.get('#drawingPoint_2').should(($value) => {
    expect($value.attr('cy')).to.be.closeTo(100, 1);
  });
});
