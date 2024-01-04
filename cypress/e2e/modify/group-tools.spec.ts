describe('group tools', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  const addLayerBtnPrefix = 'src-web-app-components-beambox-right-panel-AddLayerButton-module__btn';

  const drawingObject = () => {
    cy.get('div#left-Rectangle').click();
    cy.get('svg#svgcontent').trigger('mousedown', 50, 50, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_1').should('exist');
    cy.get('div#left-Ellipse').click();
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 150, 150, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_2').should('exist');
    cy.get('div#left-Polygon').click();
    cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 250, 250, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_3').should('exist');
  };

  const drawingObjInDiffLayer = () => {
    cy.get('div#left-Rectangle').click();
    cy.get('svg#svgcontent').trigger('mousedown', 50, 50, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_1').should('exist');
    cy.get('div.layers > .tab-icon').click();
    cy.get(`button[class*="${addLayerBtnPrefix}"]`).click({ force: true });
    cy.get('div#left-Ellipse').click();
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 150, 150, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_2').should('exist');
    cy.get('div.layers > .tab-icon').click();
    cy.get(`button[class*="${addLayerBtnPrefix}"]`).click({ force: true });
    cy.get('div#left-Polygon').click();
    cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 250, 250, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  };

  const selectAll = () => {
    cy.get('div#left-Cursor').click();
    cy.get('svg#svgcontent').trigger('mousedown', -10, -10, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.findAllByText('Multiple Objects').should('exist');
  };

  it('group', () => {
    drawingObject();
    selectAll();
    cy.get('button#group').click();
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Group');
    cy.window().then((win) => {
      const el = win.eval('svgCanvas.getSelectedElems()');
      cy.get(el).should('length', '1');
      cy.get(el).should('id', 'svg_5');
    });
  });

  it('ungroup', () => {
    drawingObject();
    selectAll();
    cy.get('button#group').click();
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Group');
    cy.get('button#ungroup').click();
    cy.get('div#left-Cursor>img').click();
    cy.window().then((win) => {
      const el = win.eval('svgCanvas.getSelectedElems()');
      cy.get(el).should('length', '0');
    });
    cy.get('#svg_1').should('have.attr', 'data-original-layer').and('eq', 'Layer 1');
    cy.get('#svg_2').should('have.attr', 'data-original-layer').and('eq', 'Layer 1');
    cy.get('#svg_3').should('have.attr', 'data-original-layer').and('eq', 'Layer 1');
  });

  it('group other layer', () => {
    drawingObjInDiffLayer();
    selectAll();
    cy.get('button#group').click();
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 3 > Group');
    cy.window().then((win) => {
      const el = win.eval('svgCanvas.getSelectedElems()');
      cy.get(el).should('length', '1');
      cy.get(el).should('id', 'svg_5');
    });
  });

  it('ungroup other layer', () => {
    drawingObjInDiffLayer();
    selectAll();
    cy.get('button#group').click();
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 3 > Group');
    cy.get('button#ungroup').click();
    cy.get('div#left-Cursor>img').click();
    cy.window().then((win) => {
      const el = win.eval('svgCanvas.getSelectedElems()');
      cy.get(el).should('length', '0');
    });
    cy.get('#svg_1').should('have.attr', 'data-original-layer').and('eq', 'Layer 1');
    cy.get('#svg_2').should('have.attr', 'data-original-layer').and('eq', 'Layer 2');
    cy.get('#svg_3').should('have.attr', 'data-original-layer').and('eq', 'Layer 3');
  });
});
