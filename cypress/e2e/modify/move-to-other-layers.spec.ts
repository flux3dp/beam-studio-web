describe('move to other layers', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('move', () => {
    cy.clickToolBtn('Line');
    cy.get('svg#svgcontent')
      .trigger('mousedown', { which: 1, pageX: 100, pageY: 100, force: true })
      .trigger('mousemove', { which: 1, pageX: 200, pageY: 200, shiftKey: true, force: true })
      .trigger('mouseup', { force: true });
    cy.checkToolBtnActive('Cursor');
    cy.get('.layers > .tab-icon').click();
    cy.get(
      '[class*="src-web-app-components-beambox-right-panel-AddLayerButton-module__btn"]'
    ).click({ force: true });
    cy.get('#svg_1').click().trigger('contextmenu');
    cy.get('.react-contextmenu').contains('Move elements to:').trigger('mouseover');
    cy.wait(1000);
    cy.get('.react-contextmenu-item.react-contextmenu-item').contains('Layer 2').click();
    cy.get('#svgcontent').click();
    cy.get('#svg_1').click();
    cy.get('.layers > .tab-icon').click();
    cy.get('[class*="src-web-app-components-beambox-right-panel-SelLayerBlock-module"] select')
      .invoke('val')
      .should('eq', 'Layer 2');
  });
});
