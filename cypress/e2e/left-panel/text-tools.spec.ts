const fontDisplay = () => cy.get('.ant-select[title="Font"] .ant-select-selector .ant-select-selection-item img');

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
    cy.get('.ant-select[title="Font"]').click();
    cy.wait(1000);
    cy.get('.rc-virtual-list-holder img[alt="Noto Sans"]').click();
    fontDisplay().should('have.attr', 'alt').and('eq', 'Noto Sans');
    cy.get('#svg_1').should('have.attr', 'font-family').and('eq', 'Noto Sans');
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
    cy.get('.ant-select[title="Style"]').click();
    cy.contains('Italic').click();
    cy.get('#svg_2').should('have.attr', 'font-style').and('eq', 'italic');
  });

  it('text size', () => {
    cy.get('#svg_1').click({ force: true });
    cy.wait(500);
    cy.get('div[title="Size"] > div.option-input > input').clear({ force: true }).type('200', { force: true }).blur();
    cy.get('#svg_1').should('have.attr', 'font-size').and('eq', '200');

    cy.get('#svg_2').click({ force: true });
    cy.wait(500);
    cy.get('div[title="Size"] > div.option-input > input').clear({ force: true }).type('50', { force: true }).blur();
    cy.get('#svg_2').should('have.attr', 'font-size').and('eq', '50');
  });

  it('text letter spacing', () => {
    cy.get('#svg_1').click({ force: true });
    cy.wait(500);
    cy.get('div[title="Letter spacing"] + div.option-input > input').clear({ force: true }).type('0.5' , {force: true}).blur();
    cy.get('#svg_1').should('have.attr', 'letter-spacing').and('eq', '0.5em');

    cy.get('#svg_2').click({ force: true });
    cy.wait(500);
    cy.get('div[title="Letter spacing"] + div.option-input > input').clear({ force: true }).type('1.5' , {force: true}).blur();
    cy.get('#svg_2').should('have.attr', 'letter-spacing').and('eq', '1.5em');
  });

  it('line spacing', () => {
    cy.realPress('Tab');
    cy.get('#svg_1').dblclick({ force: true });
    cy.realPress(['Shift', 'Enter']);
    cy.realType('LINE SPACING TEST');
    cy.get('#svg_1').should('include.text', 'TEXT FONTLINE SPACING TEST');
    cy.get('div[title="Line spacing"] + div.option-input > input').clear().type('1.5' , {force: true}).blur();
    cy.get('#svg_1').should('have.attr', 'data-line-spacing').and('eq', '1.5');

    cy.get('#svg_2').dblclick({ force: true });
    cy.realPress(['Shift', 'Enter']);
    cy.realType('LINE SPACING TEST');
    cy.get('#svg_2').should('include.text', 'TEXT STYLELINE SPACING TEST');
    cy.get('div[title="Line spacing"] + div.option-input > input').clear().type('5' , {force: true}).blur();
    cy.get('#svg_2').should('have.attr', 'data-line-spacing').and('eq', '5');
  });

  it('vertical', () => {
    cy.get('#svg_1').click({ force: true });
    cy.wait(500);
    cy.get('button[title="Vertical text"]').eq(0).click();
    cy.get('#svg_1').should('have.attr', 'data-verti').and('eq', 'true');
    cy.get('#svg_2').click({ force: true });
    cy.wait(500);
    cy.get('button[title="Vertical text"]').eq(0).click();
    cy.get('#svg_2').should('have.attr', 'data-verti').and('eq', 'true');
  });

  it('infill', () => {
    cy.get('#svg_1').click({ force: true });
    cy.wait(500);
    cy.get('#svg_1').should('have.attr', 'fill').and('eq', 'none');
    cy.get('button[title="Infill"]').click();
    cy.get('#svg_1').should('have.attr', 'fill').and('not.eq', 'none');

    cy.get('#svg_2').click({ force: true });
    cy.wait(500);
    cy.get('#svg_2').should('have.attr', 'fill').and('eq', 'none');
    cy.get('button[title="Infill"]').click();
    cy.get('#svg_2').should('have.attr', 'fill').and('not.eq', 'none');
  });
});
