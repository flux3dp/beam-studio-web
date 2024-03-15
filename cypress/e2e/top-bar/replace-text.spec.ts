describe('select tools', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  const fontDisplay = () =>
    cy
      .get('.ant-select[title="Font"]')
      .get('.ant-select-selector')
      .get('.ant-select-selection-item img');

  const drawText1 = () => {
    cy.clickToolBtn('Text');
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'move');
    cy.get('svg#svgcontent').realClick({ x: 100, y: 200 });
    cy.wait(1000);
    cy.realType('hello\u4F60\u597D');
    cy.get('#svg_1').should('exist');
    cy.wait(500);
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Text');
  };

  it('text font', () => {
    drawText1();
    cy.get('div#object-panel').should('exist');
    cy.get('.ant-select[title="Font"]').click();
    cy.wait(1000);
    cy.get('.rc-virtual-list-holder img[alt="Noto Sans"]').click();
    fontDisplay().should('have.attr', 'alt').and('eq', 'Noto Sans');
    cy.get('#svg_1').should('have.attr', 'font-family', '\'Noto Sans\'');
  });

});

