const selectGrip = 'circle#selectorGrip_resize_';

function drawingElements() {
  cy.clickToolBtn('Rectangle');
  cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('#svg_1').should('exist');
  cy.get('#infill').click();
  cy.clickToolBtn('Ellipse');
  cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('#svg_2').should('exist');
  cy.get('#infill').click();
  cy.wait(500);
}

function selectAll() {
  cy.clickToolBtn('Cursor');
  cy.get('svg#svgcontent').trigger('mousedown', -100, -100, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('div.element-title').should('have.text', 'Multiple Objects');
}

function checkBBox(top: number, bottom: number, left: number, right: number) {
  cy.get(`${selectGrip}n`).should('have.attr', 'cy');
  cy.get(`${selectGrip}n`).invoke('attr', 'cy').should('be.closeTo', top, 2);
  cy.get(`${selectGrip}s`).should('have.attr', 'cy');
  cy.get(`${selectGrip}s`).invoke('attr', 'cy').should('be.closeTo', bottom, 2);
  cy.get(`${selectGrip}w`).should('have.attr', 'cx');
  cy.get(`${selectGrip}w`).invoke('attr', 'cx').should('be.closeTo', left, 2);
  cy.get(`${selectGrip}e`).should('have.attr', 'cx');
  cy.get(`${selectGrip}e`).invoke('attr', 'cx').should('be.closeTo', right, 2);
}

describe('object boolean tools', () => {
  beforeEach(() => {
    cy.landingEditor();
    drawingElements();
    selectAll();
  });

  it('union', () => {
    cy.get('#union').click();
    cy.get('#svg_4').should(
      'have.attr',
      'd',
      'M641.34129,639.85568L4.66896,639.85568C-346.95546,639.85568 -632.00337,354.80777 -632.00337,3.18335C-632.00337,-348.44107 -346.95546,-633.48898 4.66896,-633.48898C356.29338,-633.48898 641.34129,-348.44107 641.34129,3.18335L641.34129,639.85568z'
    );
    checkBBox(-100, 100, -100, 100);
  });

  it('subtract', () => {
    cy.get('#subtract').click();
    cy.get('#svg_4').should(
      'have.attr',
      'd',
      'M641.34129,639.85568L4.66896,639.85568C356.29337,639.85568 641.34128,354.80777 641.34129,3.18336L641.34129,639.85568z'
    );
    checkBBox(0, 100, 0, 100);
  });

  it('intersect', () => {
    cy.get('#intersect').click();
    cy.get('#svg_4').should(
      'have.attr',
      'd',
      'M4.66896,3.18335L641.34129,3.18335C641.34129,354.80777 356.29338,639.85568 4.66896,639.85568L4.66896,3.18335z'
    );
    checkBBox(0, 100, 0, 100);
  });

  it('difference', () => {
    cy.get('#difference').click();
    cy.get('#svg_4').should(
      'have.attr',
      'd',
      'M4.66896,3.18335L641.34129,3.18335C641.34129,-348.44107 356.29338,-633.48898 4.66896,-633.48898C-346.95546,-633.48898 -632.00337,-348.44107 -632.00337,3.18335C-632.00337,354.80777 -346.95546,639.85568 4.66896,639.85568L4.66896,3.18335zM641.34129,639.85568L4.66896,639.85568C356.29337,639.85568 641.34128,354.80777 641.34129,3.18336L641.34129,639.85568z'
    );
    checkBBox(-100, 100, -100, 100);
  });
});
