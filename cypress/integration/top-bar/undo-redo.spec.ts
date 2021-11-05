describe('verify undo/redo behaviors', () => {
  beforeEach(() => {
    cy.landingEditor();
  });
  it('image', () => {
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#svg_1').should('exist');
    checkBehaviors();
  });

  it('geometry', () => {
    cy.get('div#left-Rectangle>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 150, 150, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 350, 350, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#svg_1').should('exist');
    checkBehaviors();
  });

  it('path', () => {
    cy.get('div#left-Line>img').click();
    cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    checkBehaviors();
  });

  it('text', () => {
    text();
    checkBehaviors();
  });

  it('text with font', () => {
    text();
    cy.get('div.react-select__value-container').click({ force: true });
    cy.get('#react-select-2-option-36').click({ force: true });
    cy.get('[src="img/top-bar/icon-undo.svg"]').click();
    cy.get('#svg_1').click({ force: true });
    cy.get('div.react-select__value-container').should('have.text', '思源黑體 TC');
    cy.get('[src="img/top-bar/icon-redo.svg"]').click();
    cy.get('#svg_1').click({ force: true });
    cy.get('div.react-select__value-container').should('have.text', 'Noto Sans');
  });

  it('text with style', () => {
    text();
    cy.get('div.select-container > select').select('Bold');
    cy.get('[src="img/top-bar/icon-undo.svg"]').click();
    cy.get('#svg_1').click({ force: true });
    cy.get('div.select-container > select').find('option:selected').should('have.text', 'Regular');
    cy.get('[src="img/top-bar/icon-redo.svg"]').click();
    cy.get('#svg_1').click({ force: true });
    cy.get('div.select-container > select').find('option:selected').should('have.text', 'Bold');
  });

  it('text with size', () => {
    text();
    cy.get(':nth-child(3) > div.option-input > input').clear({ force: true }).type('400').blur();
    cy.get('[src="img/top-bar/icon-undo.svg"]').click();
    cy.get('#svg_1').click({ force: true });
    cy.get(':nth-child(3) > div.option-input > input').should('have.value', '200');
    cy.get('[src="img/top-bar/icon-redo.svg"]').click();
    cy.get('#svg_1').click({ force: true });
    cy.get(':nth-child(3) > div.option-input > input').should('have.value', '400');
  });

  it('text with letter spacing', () => {
    text();
    cy.get(':nth-child(4) > div.option-input > input').clear({ force: true }).type('1').blur();
    cy.get('[src="img/top-bar/icon-undo.svg"]').click();
    cy.get('#svg_1').click({ force: true });
    cy.get(':nth-child(4) > div.option-input > input').should('have.value', '0');
    cy.get('[src="img/top-bar/icon-redo.svg"]').click();
    cy.get('#svg_1').click({ force: true });
    cy.get(':nth-child(4) > div.option-input > input').should('have.value', '1');
  });

  it('text with line spacing', () => {
    text();
    cy.get(':nth-child(5) > div.option-input > input').clear({ force: true }).type('2').blur();
    cy.get('[src="img/top-bar/icon-undo.svg"]').click();
    cy.get('#svg_1').click({ force: true });
    cy.get(':nth-child(5) > div.option-input > input').should('have.value', '1');
    cy.get('[src="img/top-bar/icon-redo.svg"]').click();
    cy.get('#svg_1').click({ force: true });
    cy.get(':nth-child(5) > div.option-input > input').should('have.value', '2');
  });

  it('text with vertical', () => {
    text();
    cy.get(':nth-child(6) > .onoffswitch > .onoffswitch-label > .onoffswitch-switch').click();
    cy.get('[src="img/top-bar/icon-undo.svg"]').click();
    cy.get('#svg_1').click({ force: true });
    cy.get('#width').should('have.attr', 'value', '149.61');
    cy.get('#height').should('have.attr', 'value', '28.97');
    cy.get('[src="img/top-bar/icon-redo.svg"]').click();
    cy.get('#svg_1').click({ force: true });
    cy.get('#width').should('have.attr', 'value', '14.42');
    cy.get('#height').should('have.attr', 'value', '288.97');
  });

  it('text with infill', () => {
    text();
    cy.get(':nth-child(7) > .onoffswitch > .onoffswitch-label > .onoffswitch-switch').click();
    cy.get('[src="img/top-bar/icon-undo.svg"]').click();
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1').should('have.attr', 'fill', 'none');
    cy.get('[src="img/top-bar/icon-redo.svg"]').click();
    cy.get('#svg_1').click({ force: true });
    cy.get('#svg_1').should('have.attr', 'fill', '#000000');
  });

  function checkBehaviors() {
    cy.wait(500);
    cy.get('[src="img/top-bar/icon-undo.svg"]').click();
    cy.get('#svg_1').should('not.exist');
    cy.get('[src="img/top-bar/icon-redo.svg"]').click();
    cy.get('#svg_1').should('exist');
  };

  function text() {
    cy.get('div#left-Text>img').click();
    cy.get('svg#svgcontent').realClick({ x: 10, y: 20 }).realType('Test Undo/Redo');
  };
});
