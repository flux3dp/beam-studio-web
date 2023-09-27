const fontDisplay = () => cy.get('.options-panel .text-options .ant-select .ant-select-selector .ant-select-selection-item img');

describe('select tools', () => {
  it('text font', () => {
    cy.landingEditor();
    cy.wait(500);
    cy.get('div#left-Text>img').click();
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'move');
    cy.get('svg#svgcontent').realClick({ x: 100, y: 200 });
    cy.wait(1000);
    cy.realType('TEST TEXT FONT');
    cy.get('#svg_1').should('exist');
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Text');
    cy.get('div#object-panel').should('exist');
    cy.get('.options-panel .text-options .ant-select').click();
    cy.wait(1000);
    cy.get('.rc-virtual-list-holder .ant-select-item[label="Noto Sans"]').click();
    fontDisplay().should('have.attr', 'alt').and('eq', 'Noto Sans');
    cy.get('#svg_1').should('have.attr', 'font-family').and('eq', "'Noto Sans'");
  });

  it('text style', () => {
    cy.get('div#left-Text>img').click();
    cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'move');
    cy.get('svg#svgcontent').realClick({ x: 150, y: 150 });

    cy.wait(1000);
    cy.realType('TEST TEXT STYLE');
    cy.get('#svg_2').should('exist');
    cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Text');
    cy.get('div#object-panel').should('exist');
    cy.get('div.select-container > select').select('Italic');
    cy.get('#svg_2').should('have.attr', 'font-style').and('eq', 'italic');
  });

  it('text size', () => {
    cy.get('#svg_1').click();
    cy.get(':nth-child(3) > div.option-input > input').clear({ force: true });
    cy.wait(500);
    cy.type('200' , {force: true}).blur();
    cy.get('#svg_1').should('have.attr', 'font-size').and('eq', '200');

    cy.get('#svg_2').click();
    cy.get(':nth-child(3) > div.option-input > input').clear({ force: true });
    cy.wait(500);
    cy.type('50' , {force: true}).blur();
    cy.get('#svg_2').should('have.attr', 'font-size').and('eq', '50');
  });

  it('text letter spacing', () => {
    cy.get('#svg_1').click();
    cy.get(':nth-child(4) > div.option-input > input').clear({ force: true }).type('0.5' , {force: true}).blur();
    cy.get('#svg_1').should('have.attr', 'letter-spacing').and('eq', '0.5em');

    cy.get('#svg_2').click();
    cy.get(':nth-child(4) > div.option-input > input').clear({ force: true }).type('1.5' , {force: true}).blur();
    cy.get('#svg_2').should('have.attr', 'letter-spacing').and('eq', '1.5em');
  });

  it('line spacing', () => {
    cy.realPress('Tab');
    cy.get('#svg_1').dblclick({ force: true });
    cy.realPress(['Shift', 'Enter']);
    cy.realType('LINE SPACING TEST');
    cy.get('#svg_1').should('include.text', 'TEXT FONTLINE SPACING TEST');
    cy.get(':nth-child(5) > div.option-input > input').clear().type('1.5' , {force: true}).blur();
    cy.get('#svg_1').should('have.attr', 'data-line-spacing').and('eq', '1.5');

    cy.get('#svg_2').dblclick({ force: true });
    cy.realPress(['Shift', 'Enter']);
    cy.realType('LINE SPACING TEST');
    cy.get('#svg_2').should('include.text', 'TEXT STYLELINE SPACING TEST');
    cy.get(':nth-child(5) > div.option-input > input').clear().type('5' , {force: true}).blur();
    cy.get('#svg_2').should('have.attr', 'data-line-spacing').and('eq', '5');
  });

  it('vertical', () => {
    cy.get('#svg_1').click({ force: true });
    cy.get(':nth-child(6) .adm-switch-checkbox').click();
    cy.get('#svg_1').should('have.attr', 'data-verti').and('eq', 'true');
    cy.get('#svg_2').click({ force: true });
    cy.get(':nth-child(6) .adm-switch-checkbox').click();
    cy.get('#svg_2').should('have.attr', 'data-verti').and('eq', 'true');
  });

  it('infill', () => {
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', 'none');
    cy.get(':nth-child(7) > .onoffswitch > .onoffswitch-label > .onoffswitch-switch').click();
    cy.get('#svg_1').should('have.attr', 'fill').and('not.eq', 'none');

    cy.get('#svg_2').click({ force: true });
    cy.get('#svg_2').should('have.attr', 'fill').and('eq', 'none');
    cy.get(':nth-child(7) > .onoffswitch > .onoffswitch-label > .onoffswitch-switch').click();
    cy.get('#svg_2').should('have.attr', 'fill').and('not.eq', 'none');
  });
});
