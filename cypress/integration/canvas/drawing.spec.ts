describe.skip('drawing', () => {
  beforeEach(() => {
    cy.landing();
  });

  it('rectangle', () => {
    cy.get('div#left-Rectangle').click();
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'crosshair');

    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 300, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_1').should('exist');
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', 'none')
    cy.get('#svg_1').should('have.attr', 'fill-opacity').and('eq', '0');
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Rectangle');
    cy.get('div#object-panel').should('exist');

    cy.get('div.onoffswitch').click();
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', '#000')
    // cy.get('#svg_1').should('have.attr', 'fill-opacity').and('eq', '1');
  });

  it('ellipse', () => {
    cy.get('div#left-Ellipse').click();
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'crosshair');

    cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_1').should('exist');
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', 'none')
    cy.get('#svg_1').should('have.attr', 'fill-opacity').and('eq', '0');
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Oval');
    cy.get('div#object-panel').should('exist');

    cy.get('div.onoffswitch').click();
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', '#000')
    // cy.get('#svg_1').should('have.attr', 'fill-opacity').and('eq', '1');
  });

  it('polygon', () => {
    cy.get('div#left-Polygon').click();
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'crosshair');

    cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_1').should('exist');
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', 'none')
    cy.get('#svg_1').should('have.attr', 'fill-opacity').and('eq', '0');
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Polygon');
    cy.get('div#object-panel').should('exist');

    cy.get('div.onoffswitch').click();
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', 'black')
    // cy.get('#svg_1').should('have.attr', 'fill-opacity').and('eq', '1');
  });
});
