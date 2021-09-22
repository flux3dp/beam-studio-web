describe('object change tools', () => {
  beforeEach(() => {
    cy.landingEditor();
    drawingPolygon();
  });

  it('change object location by hand movement', () => {
    cy.get('#x_position').type('{selectall}{backspace}100').blur();
    cy.get('#y_position').type('{selectall}{backspace}100').blur();
    cy.get('#x_position').should('have.value', '100');
    cy.get('#y_position').should('have.value', '100');
  });

  it('change object rotate by hand movement', () => {
    cy.get('#rotate').type('{selectall}{backspace}135').blur();
    cy.get('#rotate').should('have.value', '135');
  });

  it('change object size by hand movement', () => {
    cy.get('#width').type('{selectall}{backspace}150').blur();
    cy.get('#height').type('{selectall}{backspace}150').blur();
    cy.get('#width').should('have.value', '150');
    cy.get('#height').should('have.value', '150');
  });

  function drawingPolygon() {
    cy.get('div#left-Polygon>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 50, 50, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_1').should('exist');
    cy.wait(500);
  }
});
