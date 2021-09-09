it('change sides by keyboard', () => {
  cy.landing();
  cy.get('div#left-Polygon>img').click();
  cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 250, 250, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('#svg_1').trigger('keydown', { keyCode: 189 });
  cy.get('#svg_1').trigger('keyup', { keyCode: 189 });
  cy.get('.option-input > input').should('have.attr', 'value').and('eq', '4');
  cy.get('#svg_1').trigger('keydown', { keyCode: 187 });
  cy.get('#svg_1').trigger('keyup', { keyCode: 187 });
  cy.get('.option-input > input').should('have.attr', 'value').and('eq', '5');
});

it('lock rotate by shift', () =>{
  cy.get('#svg_1').trigger('keydown', { keyCode: 16 });
  cy.get('#selectorGrip_rotate')
  .trigger('keydown', { keyCode: 16, release: false })
  .trigger('mousedown', { which: 1, pageX: 100, pageY: 100 })
  .trigger('mousemove', { which: 1, pageX: 200, pageY: 200 })
  .trigger('mouseup')
  .trigger('keydup', { keyCode: 16, release: true })
});
