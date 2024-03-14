const undoBtn = () => cy.get('div[title="Undo"]');
const redoBtn = () => cy.get('div[title="Redo"]');
const fontDisplay = () => cy.get('.ant-select[title="Font"] .ant-select-selector .ant-select-selection-item img');

describe('verify undo/redo behaviors', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  // it('text', () => {
  //   text();
  //   checkBehaviors();
  // });

  it('text with font', () => {
    text();
    cy.get('.ant-select-selection-item[title="Font"]').click();
    cy.get('[alt="Noto Sans"]').click();
    cy.get('.ant-select[title="Font"]').click();
    cy.wait(1000);
    cy.get('.rc-virtual-list-holder img[alt="lobster"]').click();
    cy.get('#svg_1').click({ force: true });
    fontDisplay().should('have.attr', 'alt').and('eq', 'lobster');
    undoBtn().click();
    cy.get('#svg_1').click({ force: true });
    fontDisplay().should('have.attr', 'alt').and('eq', 'Noto Sans');
    redoBtn().click();
    cy.get('#svg_1').click({ force: true });
    fontDisplay().should('have.attr', 'alt').and('eq', 'lobster');
  });

  // it('text with style', () => {
  //   text();
  //   cy.get('div.select-container > select').select('Bold');
  //   undoBtn().click();
  //   cy.get('#svg_1').click({ force: true });
  //   cy.get('div.select-container > select').find('option:selected').should('have.text', 'Regular');
  //   redoBtn().click();
  //   cy.get('#svg_1').click({ force: true });
  //   cy.get('div.select-container > select').find('option:selected').should('have.text', 'Bold');
  // });

  // it('text with size', () => {
  //   text();
  //   cy.get(':nth-child(3) > div.option-input > input').clear({ force: true }).type('400',{ force: true }).blur();
  //   undoBtn().click();
  //   cy.get('#svg_1').click({ force: true });
  //   cy.get(':nth-child(3) > div.option-input > input').should('have.value', '200');
  //   redoBtn().click();
  //   cy.get('#svg_1').click({ force: true });
  //   cy.get(':nth-child(3) > div.option-input > input').should('have.value', '400');
  // });

  // it('text with letter spacing', () => {
  //   text();
  //   cy.get(':nth-child(4) > div.option-input > input').clear({ force: true }).type('1',{ force: true }).blur();
  //   undoBtn().click();
  //   cy.get('#svg_1').click({ force: true });
  //   cy.get(':nth-child(4) > div.option-input > input').should('have.value', '0');
  //   redoBtn().click();
  //   cy.get('#svg_1').click({ force: true });
  //   cy.get(':nth-child(4) > div.option-input > input').should('have.value', '1');
  // });

  // it('text with line spacing', () => {
  //   text();
  //   cy.get(':nth-child(5) > div.option-input > input').clear({ force: true }).type('2').blur();
  //   undoBtn().click();
  //   cy.get('#svg_1').click({ force: true });
  //   cy.get(':nth-child(5) > div.option-input > input').should('have.value', '1');
  //   redoBtn().click();
  //   cy.get('#svg_1').click({ force: true });
  //   cy.get(':nth-child(5) > div.option-input > input').should('have.value', '2');
  // });

  // it('text with vertical', () => {
  //   text();
  //   cy.get(':nth-child(6) .adm-switch-checkbox').click();
  //   undoBtn().click();
  //   cy.get('#svg_1').click({ force: true });
  //   cy.wait(1000);
  //   cy.get('#width').should('have.attr', 'value').then(parseFloat).should('be.greaterThan',100);
  //   cy.get('#height').should('have.attr', 'value').then(parseFloat).should('be.lessThan',50);
  //   redoBtn().click();
  //   cy.get('#svg_1').click({ force: true });
  //   cy.wait(1000);
  //   cy.get('#width').should('have.attr', 'value').then(parseFloat).should('be.lessThan',50);
  //   cy.get('#height').should('have.attr', 'value').then(parseFloat).should('be.greaterThan',100);
  // });

  // it('text with infill', () => {
  //   text();
  //   cy.get(':nth-child(7) > .onoffswitch > .onoffswitch-label > .onoffswitch-switch').click();
  //   undoBtn().click();
  //   cy.get('#svg_1').click({ force: true });
  //   cy.get('#svg_1').should('have.attr', 'fill', 'none');
  //   redoBtn().click();
  //   cy.get('#svg_1').click({ force: true });
  //   cy.get('#svg_1').should('not.have.attr', 'fill', 'none');
  // });

  function checkBehaviors() {
    cy.wait(500);
    undoBtn().click();
    cy.get('#svg_1').should('not.exist');
    redoBtn().click();
    cy.get('#svg_1').should('exist');
  }

  function text() {
    cy.get('div#left-Text>img').click();
    cy.get('svg#svgcontent').realClick({ x: 10, y: 20 });
    cy.wait(500);
    cy.realType('Test Undo/Redo');
  }
});
