describe('drawing', () => {
  beforeEach(() => {
    cy.landingEditor();
    cy.wait(300);
  });

  it('path element check speed is 20 or not', () => {
    cy.clickToolBtn('Line');
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'crosshair');

    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });

    cy.get('#selectorGrip_resize_ne').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(301, 1); });
    cy.get('#selectorGrip_resize_nw').first().should(($grip) => { expect($grip.attr('cx')).to.be.closeTo(100, 1); });

    cy.get('#svg_1').should('exist');
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Line');
    cy.get('div#object-panel').should('exist');

    cy.get('#speed-input')
      .should('have.attr', 'id', 'speed-input')
      .should('have.value', '20')
    // .clear()
    // .type('30')
    // .should('have.value', '30');
  });
});
