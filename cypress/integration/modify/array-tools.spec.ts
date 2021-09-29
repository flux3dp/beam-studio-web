describe('array tools', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('image', () => {
    cy.uploadFile('flux.png', 'image/png');
    doAllThing();
    cy.wait(500);
    cy.window().then((win) => {
      const el = win.eval('svgCanvas.getSelectedElems()');
      cy.get(el).should('length', '1');
      cy.get(el).should('id', 'svg_5');
    });
    cy.get('div.top-bar div.element-title').should('have.text', 'Multiple Objects');
    checkAmount();
  });

  it('geometry', () => {
    cy.get('div#left-Polygon>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 50, 50, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.wait(500);
    doAllThing();
    cy.window().then((win) => {
      const el = win.eval('svgCanvas.getSelectedElems()');
      cy.get(el).should('length', '1');
      cy.get(el).should('id', 'svg_5');
    });
    cy.get('div.top-bar div.element-title').should('have.text', 'Multiple Objects');
    checkAmount();
  });

  it('path', () => {
    cy.get('div#left-Line>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.wait(500);
    doAllThing();
    cy.window().then((win) => {
      const el = win.eval('svgCanvas.getSelectedElems()');
      cy.get(el).should('length', '1');
      cy.get(el).should('id', 'svg_5');
    });
    cy.get('div.top-bar div.element-title').should('have.text', 'Multiple Objects');
    checkAmount();
  });

  it('text', () => {
    cy.get('div#left-Text>img').click();
    cy.get('svg#svgcontent').realClick({ x: 10, y: 20 }).realType('Test Array');
    cy.wait(500);
    doAllThing();
    cy.window().then((win) => {
      const el = win.eval('svgCanvas.getSelectedElems()');
      cy.get(el).should('length', '1');
      cy.get(el).should('id', 'svg_8');
    });
    cy.get('div.top-bar div.element-title').should('have.text', 'Multiple Objects');
    checkAmount();
  });

  it('group', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('div#left-Ellipse>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#group > img').click();
    cy.wait(500);
    doAllThing();
    cy.window().then((win) => {
      const el = win.eval('svgCanvas.getSelectedElems()');
      cy.get(el).should('length', '1');
      cy.get(el).should('id', 'svg_17');
    });
    cy.get('div.top-bar div.element-title').should('have.text', 'Multiple Objects');
    cy.get('div#left-Cursor>img').click();
    cy.window().then((win) => {
      const amount = win.eval('svgCanvas.getVisibleElements()');
      cy.get(amount).should('length', '8');
    });
  });

  it('mutilselect', () => {
    cy.get('div#left-Line>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('div#left-Polygon>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 50, 50, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.wait(500);
    doAllThing();
    cy.window().then((win) => {
      const el = win.eval('svgCanvas.getSelectedElems()');
      cy.get(el).should('length', '1');
      cy.get(el).should('id', 'svg_13');
    });
    cy.get('div.top-bar div.element-title').should('have.text', 'Multiple Objects');
    cy.get('div#left-Cursor>img').click();
    cy.window().then((win) => {
      const amount = win.eval('svgCanvas.getVisibleElements()');
      cy.get(amount).should('length', '8');
    });
  });

  function doAllThing() {
    cy.get('div#left-Cursor>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', -10, -10, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#array').click();
    cy.get('#columns').clear().type('2').blur();
    cy.get('#rows').clear().type('2').blur();
    cy.get('#array_width').clear().type('100').blur();
    cy.get('#array_height').clear().type('150').blur();
    cy.get('.primary').click();
  };

  function checkAmount() {
    cy.get('div#left-Cursor>img').click();
    cy.window().then((win) => {
      const amount = win.eval('svgCanvas.getVisibleElements()');
      cy.get(amount).should('length', '4');
    });
  };
});
