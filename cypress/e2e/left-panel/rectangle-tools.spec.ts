describe('rectangle tools', () => {
  function openDocument() {
    cy.get('div.menu-btn-container').click();
    cy.get('.rc-menu--open > :nth-child(2) > :nth-child(1)').click();
    cy.contains('Document Settings').click();
  }

  function setAdorWorkarea() {
    openDocument();
    cy.wait(500);
    cy.get('[class^="ant-select-selection-item"]').eq(0).click();
    cy.get('[class^="ant-select-item-option-content"]').contains('Ador').click({ force: true });
    cy.get('button.ant-btn').contains('Save').click({ force: true });
    cy.wait(500);
  }

  it('rounded corner', () => {
    cy.landingEditor();
    cy.clickToolBtn('Rectangle');
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.wait(500);
    cy.get('div.option-input > input').dblclick({ force: true });
    cy.get('div.option-input > input').clear({ force: true }).type('40', { force: true }).blur();
    cy.get('#svg_1').should('have.attr', 'rx').and('eq', '400');
  });
  it('infill', () => {
    cy.landingEditor();
    cy.wait(500);
    setAdorWorkarea();
    cy.clickToolBtn('Rectangle');
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.wait(500);
    cy.get('#infill').click();
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', '#333333');
    // cy.wait(500);
    // cy.get('img.tab-icon').eq(0).click();
    // cy.wait(500);
    // cy.get('#laser-panel [class^="ant-select-selection-item"]').eq(0).click();
    // cy.get('[class^="ant-select-item-option"]').contains('Printing').click({force: true});
    // cy.wait(500);
  });
});
