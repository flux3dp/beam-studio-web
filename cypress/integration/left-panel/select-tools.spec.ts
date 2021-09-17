it('select', () => {
  cy.landingEditor();
  cy.get('div#left-Text>img').click();
  cy.get('svg#svgcontent').realClick({ x: 100, y: 200 }).realType('TEST SELECT');
  cy.get('#svg_1').should('exist');
  cy.get('#left-Cursor').click();
  cy.get('#svg_1').realClick();
  cy.window().then((win) => {
    const el = win.eval('svgCanvas.getSelectedElems()');
    cy.get(el).should('length', '1');
    cy.get(el).should('id', 'svg_1');
  });
});

it('mutil select', () => {
  cy.get('div#left-Rectangle>img').click();
  cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('#svg_2').should('exist');
  cy.get('#left-Cursor').click();
  cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.window().then((win) => {
    const el = win.eval('svgCanvas.getTempGroup()');
    const childNodes = Array.from(el.childNodes);
    cy.get(childNodes).should('have.length', '2');
    cy.get(childNodes[0]).should('have.id', 'svg_1');
    cy.get(childNodes[1]).should('have.id', 'svg_2');
  });
});
