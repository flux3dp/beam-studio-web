describe('drawing', () => {
  beforeEach(() => {
    cy.landing();
  });

  it('rectangle', () => {
    cy.get('div#left-Rectangle>img').click();
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'crosshair');

    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 300, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_1').should('exist');
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', 'none');
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Rectangle');
    cy.get('div#object-panel').should('exist');

    cy.get('#selectorGrip_resize_ne').first().should(($grip) => {
      expect(+$grip.attr("cx")).to.be.closeTo(301, 1);
      expect(+$grip.attr("cy")).to.be.closeTo(99.5, 1);
    });
    cy.get('#selectorGrip_resize_sw').first().should(($grip) => {
      expect(+$grip.attr("cx")).to.be.closeTo(100, 1);
      expect(+$grip.attr("cy")).to.be.closeTo(200, 1);
    });

    cy.get('div.onoffswitch').click();
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', '#000');
  });

  it('ellipse', () => {
    cy.get('div#left-Ellipse>img').click();
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'crosshair');

    cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_1').should('exist');
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', 'none');
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Oval');
    cy.get('div#object-panel').should('exist');

    cy.get('#selectorGrip_resize_ne').first().should(($grip) => { expect(+$grip.attr("cx")).to.be.closeTo(400, 2); });
    cy.get('#selectorGrip_resize_sw').first().should(($grip) => { expect(+$grip.attr("cy")).to.be.closeTo(400, 2); });

    cy.get('div.onoffswitch').click();
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', '#000');
  });

  it('polygon', () => {
    cy.get('div#left-Polygon>img').click();
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'crosshair');

    cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_1').should('exist');
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', 'none');
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Polygon');
    cy.get('div#object-panel').should('exist');

    cy.get('#selectorGrip_resize_ne').first().should(($grip) => { expect(+$grip.attr("cx")).to.be.closeTo(453, 2); });
    cy.get('#selectorGrip_resize_sw').first().should(($grip) => { expect(+$grip.attr("cy")).to.be.closeTo(453, 2); });
    cy.wait(500);

    cy.get('div.option-input > input').clear().type('8').blur();
    cy.get('#svg_1').should('have.attr', 'sides').and('eq', '8');
    cy.get('div.onoffswitch').click();
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', 'black');
  });

  it('line', () => {
    cy.get('div#left-Line>img').click();
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'crosshair');

    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });

    cy.get('#selectorGrip_resize_ne').first().should(($grip) => { expect(+$grip.attr("cx")).to.be.closeTo(301, 1); });
    cy.get('#selectorGrip_resize_nw').first().should(($grip) => { expect(+$grip.attr("cx")).to.be.closeTo(100, 1); });

    cy.get('#svg_1').should('exist');
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Line');
    cy.get('div#object-panel').should('exist');
  });

  it('pen', () => {
    cy.get('div#left-Pen>img').click();
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'crosshair');

    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('svg#svgcontent').trigger('mousedown', 200, 0, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('svg#svgcontent').trigger('mousedown', 0, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });

    cy.get('#svg_1').should('exist');
    cy.get('div#pathedit-panel').should('exist');

    cy.get('#pathpointgrip_0').first().should(($grip) => { expect(+$grip.attr("cx")).to.be.closeTo(100, 1); });
    cy.get('#pathpointgrip_1').first().should(($grip) => { expect(+$grip.attr("cx")).to.be.closeTo(300, 1); });
    cy.get('#pathpointgrip_2').first().should(($grip) => { expect(+$grip.attr("cx")).to.be.closeTo(301, 1); });
    cy.get('#pathpointgrip_3').first().should(($grip) => { expect(+$grip.attr("cx")).to.be.closeTo(100, 1); });
  });

  it('text', () => {
    cy.get('div#left-Text>img').click();
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'move');

    cy.get('svg#svgcontent').realClick({ x: 100, y: 200 }).realType('Bring Any Design to Life');
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Text');

    cy.get('#svg_1').should('exist');
    cy.get('div.text-options').should('exist');
    cy.get('#svg_1').should('have.text', 'Bring Any Design to Life');
  });
});
