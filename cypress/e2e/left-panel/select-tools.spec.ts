describe('select tools', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('select', () => {
    cy.get('div#left-Text').click();
    cy.get('svg#svgcontent').realClick({ x: 100, y: 200 });
    cy.wait(500);
    cy.realType('TEST SELECT');
    cy.get('#svg_1').should('exist');
    cy.get('#left-Cursor').click();
    cy.get('#svg_1').realClick();
    cy.window().then((win) => {
      const el = win.eval('svgCanvas.getSelectedElems()');
      cy.get(el).should('length', '1');
      cy.get(el).should('id', 'svg_1');
    });
  });

  it.only('mutil select', () => {
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
    cy.get('div#left-Cursor').click();
    cy.get('svg#svgcontent').trigger('mousedown', -10, -10, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.findAllByText('Multiple Objects').should('exist');
    cy.window().then((win) => {
      const el = win.eval('svgCanvas.getTempGroup()');
      const childNodes = Array.from(el.childNodes);
      expect(childNodes).to.have.length(2);
      expect(childNodes[0]).to.have.id('svg_1');
      expect(childNodes[1]).to.have.id('svg_2');
    });
  });
  it('select rotate', () => {
    cy.landingEditor();
    cy.get('div#left-Element').click();
    cy.get('[class="ant-modal-header"]').contains('Element').should('exist');
    cy.get('[class="ant-modal-body"]').should('exist');
    cy.get('[class="adm-capsule-tabs-tab adm-capsule-tabs-tab-active"]').should('exist');
    cy.get('[class="anticon src-web-app-views-beambox-ShapePanel-ShapePanel-module__icon--YhfHN"]')
      .eq(1).click();
    cy.get('#svg_1').click();
    cy.get('circle#selectorGrip_rotate')
      .trigger('mousedown', { which: 1,force: true })
      .trigger('mousemove', { which: 1, pageX: 150, pageY: 50, shiftKey: true, force: true })
      .trigger('mouseup', { force: true })
    cy.get('#svg_1')
      .should('exist')
      .should('have.attr', 'transform', 'rotate(45 250.00000000000003,216.50650024414062) ');
    cy.get('#svg_1').click();
    cy.get('circle#selectorGrip_rotate')
      .trigger('mousedown', { which: 1,force: true })
      .trigger('mousemove', { which: 1, pageX: 200, pageY: 100, shiftKey: true, force: true })
      .trigger('mouseup', { force: true })
    cy.get('#svg_1')
      .should('exist')
      .should('have.attr', 'transform', 'rotate(90 250,216.50650024414065) ');
    cy.get('#svg_1').click();
    cy.get('circle#selectorGrip_rotate')
      .trigger('mousedown', { which: 1,force: true })
      .trigger('mousemove', { which: 1, pageX: 200, pageY: 200, shiftKey: true, force: true })
      .trigger('mouseup', { force: true })
    cy.get('#svg_1')
      .should('exist')
      .should('have.attr', 'transform', 'rotate(135 249.99999999999997,216.50650024414062) ');
    cy.get('#svg_1').click();
    cy.get('circle#selectorGrip_rotate')
      .trigger('mousedown', { which: 1,force: true })
      .trigger('mousemove', { which: 1, pageX: 200, pageY: 300, shiftKey: true, force: true })
      .trigger('mouseup', { force: true })
    cy.get('#svg_1')
      .should('exist')
      .should('have.attr', 'transform', 'rotate(-180 250,216.5065002441406) ');
    });
});
