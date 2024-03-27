const drawingTools = ['Cursor', 'Photo', 'Text', 'Rectangle', 'Ellipse', 'Polygon', 'Line', 'Pen'];

function checkActive(activeItem: string) {
  drawingTools.forEach((item) => {
    cy.checkToolBtnActive(item, item === activeItem);
  });
}

it('check the existence of the left toolbar and default active tool', () => {
  cy.landingEditor();

  cy.get('div.left-toolbar').should('exist');
  checkActive('Cursor');

  drawingTools.forEach((tool) => {
    cy.clickToolBtn(tool);
    checkActive(tool);
  });
});
