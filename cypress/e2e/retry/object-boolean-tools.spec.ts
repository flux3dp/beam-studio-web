import { md5 } from '../../support/utils';

const selectGrip = 'circle#selectorGrip_resize_';

function drawingElements() {
  cy.clickToolBtn('Rectangle');
  cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('#svg_1').should('exist');
  cy.get('#infill').click();
  cy.get('#x_position').clear().type('0{enter}');
  cy.get('#y_position').clear().type('0{enter}');
  cy.get('#w_size').clear().type('75{enter}');
  cy.get('#h_size').clear().type('75{enter}');
  cy.clickToolBtn('Ellipse');
  cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('#svg_2').should('exist');
  cy.get('#infill').click();
  cy.get('#cx_position').clear().type('0{enter}');
  cy.get('#cy_position').clear().type('0{enter}');
  cy.get('#rx_size').clear().type('150{enter}');
  cy.get('#ry_size').clear().type('150{enter}');
  // cy.pause();
  cy.wait(500);
}

function selectAll() {
  cy.clickToolBtn('Cursor');
  cy.get('svg#svgcontent').trigger('mousedown', -100, -100, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 300, 300, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('div.element-title').should('have.text', 'Multiple Objects');
}

function checkDimensions(x: number, y: number, w: number, h: number) {
  cy.get('#x_position').should('have.value', x);
  cy.get('#y_position').should('have.value', y);
  cy.get('#w_size').should('have.value', w);
  cy.get('#h_size').should('have.value', h);
}

describe('object boolean tools', () => {
  beforeEach(() => {
    cy.landingEditor();
    drawingElements();
    selectAll();
  });

  it('union', () => {
    cy.get('#union').click();
    cy.get('#svg_4')
      .invoke('attr', 'd')
      .then((d) => expect(md5(d)).equal('94bd53facadff95eb34e2e87dc42202f'));
    checkDimensions(-75, -75, 150, 150);
  });

  it('subtract', () => {
    cy.get('#subtract').click();
    cy.get('#svg_4')
      .invoke('attr', 'd')
      .then((d) => expect(md5(d)).equal('763450f76bc0d3fbb482d17e9e3b78d4'));
    checkDimensions(0, 0, 75, 75);
  });

  it('intersect', () => {
    cy.get('#intersect').click();
    cy.get('#svg_4')
      .invoke('attr', 'd')
      .then((d) => expect(md5(d)).equal('efa5f71b4793ddbd4802fb2e010485dd'));
    checkDimensions(0, 0, 75, 75);
  });

  it('difference', () => {
    cy.get('#difference').click();
    cy.get('#svg_4')
      .invoke('attr', 'd')
      .then((d) => expect(md5(d)).equal('eb43eadf648392c529704d08d6ac01f1'));
    checkDimensions(-75, -75, 150, 150);
  });
});
