const drawingTools = ['left-Cursor', 'left-Photo', 'left-Text', 'left-Rectangle', 'left-Ellipse', 'left-Polygon', 'left-Line', 'left-Pen'];

it('check the existence of the left toolbar and default active tool', () => {
  cy.landingEditor();

  cy.get('div.left-toolbar').should('exist');
  checkActive('left-Cursor');

  drawingTools.forEach((tool) => {
    cy.get(`div#${tool}`).click();
    checkActive(tool);
  })
});

function checkActive(activeItem) {
  drawingTools.forEach((item) => {
    cy.get(`div#${item}`).should('exist');
    cy.get(`div#${item}`).should(item == activeItem ? 'have.class' : 'not.have.class', 'active');
  });
};
