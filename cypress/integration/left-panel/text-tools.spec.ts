it('text font', () => {
  cy.landing();
  cy.get('div#left-Text>img').click();
  cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'move');

  cy.get('svg#svgcontent').realClick({ x: 100, y: 200 }).realType('TEST TEXT FONT');
  cy.get('#svg_1').should('exist');
  cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Text');
  cy.get('div#object-panel').should('exist');
  cy.get('.react-select__value-container').click();
  cy.get('#react-select-2-option-1').click();
  cy.get('.react-select__value-container').should('have.text', 'Alegreya');
  cy.get('#svg_1').should('have.attr', 'font-family').and('eq', "'Alegreya'");
});

it('text style', () => {
  cy.get('div#left-Text>img').click();
  cy.get('g#selectorParentGroup').should('have.css', 'cursor', 'move');

  cy.get('svg#svgcontent').realClick({ x: 150, y: 150 }).realType('TEST TEXT STYLE');
  cy.get('#svg_2').should('exist');
  cy.get('div.top-bar div.element-title').should('have.text', 'Layer 1 > Text');
  cy.get('div#object-panel').should('exist');
  cy.get('div.select-container > select').select('Bold Italic');
  cy.get('#svg_2').should('have.attr', 'font-style').and('eq', 'italic');
});

it('text size', () => {
  cy.get('#svg_1').click();
  cy.get(':nth-child(3) > div.option-input > input').clear().type('200').blur();
  cy.get('#svg_1').should('have.attr', 'font-size').and('eq', '200');

  cy.get('#svg_2').click();
  cy.get(':nth-child(3) > div.option-input > input').clear().type('50').blur();
  cy.get('#svg_2').should('have.attr', 'font-size').and('eq', '50');
});

it('text letter spacing', () => {
  cy.get('#svg_1').click();
  cy.get(':nth-child(4) > div.option-input > input').clear().type('0.5').blur();
  cy.get('#svg_1').should('have.attr', 'letter-spacing').and('eq', '0.5em');

  cy.get('#svg_2').click();
  cy.get(':nth-child(4) > div.option-input > input').clear().type('1.5').blur();
  cy.get('#svg_2').should('have.attr', 'letter-spacing').and('eq', '1.5em');
});

it('text line spacing', () => {
  cy.realPress("Tab");
  cy.get('#svg_1').dblclick({ force: true });
  cy.realPress(["Shift", "Enter"]);
  cy.realType('LINE SPACING TEST');
  cy.get('#svg_1').should('include.text', 'TEST TEXT FONTLINE SPACING TEST');
  cy.get(':nth-child(5) > div.option-input > input').clear().type('1.5').blur();
  cy.get('#svg_1').should('have.attr', 'data-line-spacing').and('eq', '1.5');

  cy.get('#svg_2').dblclick({ force: true });
  cy.realPress(["Shift", "Enter"]);
  cy.realType('LINE SPACING TEST');
  cy.get('#svg_2').should('include.text', 'TEST TEXT STYLELINE SPACING TEST');
  cy.get(':nth-child(5) > div.option-input > input').clear().type('5').blur();
  cy.get('#svg_2').should('have.attr', 'data-line-spacing').and('eq', '5');
});

it('vertical', () => {
  cy.get('#svg_1').click({ force: true });
  cy.get(':nth-child(6) > .onoffswitch > .onoffswitch-label > .onoffswitch-switch').click();
  cy.get('#svg_1').should('have.attr', 'data-verti').and('eq', 'true');

  cy.get('#svg_2').click({ force: true });
  cy.get(':nth-child(6) > .onoffswitch > .onoffswitch-label > .onoffswitch-switch').click();
  cy.get('#svg_2').should('have.attr', 'data-verti').and('eq', 'true');
});

it('infill', () => {
  cy.get('#svg_1').click({ force: true });
  cy.get(':nth-child(7) > .onoffswitch > .onoffswitch-label > .onoffswitch-switch').click();
  cy.get('#svg_1').should('have.attr', 'fill').and('eq', '#000000');

  cy.get('#svg_2').click({ force: true });
  cy.get(':nth-child(7) > .onoffswitch > .onoffswitch-label > .onoffswitch-switch').click();
  cy.get('#svg_2').should('have.attr', 'fill').and('eq', '#000000');
});

it('convert to path', () => {
  cy.get('#svg_1').click({ force: true });
  cy.get('#convert_to_path').click();
  cy.get('#svg_3').should('exist');
  cy.get('.actions-panel').should('exist');

  cy.get('#svg_2').click({ force: true });
  cy.get('#convert_to_path').click();
  cy.get('#svg_4').should('exist');
  cy.get('.actions-panel').should('exist');
});
