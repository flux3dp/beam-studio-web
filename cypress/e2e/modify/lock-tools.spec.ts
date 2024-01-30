it('lock', () => {
  cy.landingEditor();
  cy.get('div#left-Polygon>img').click();
  cy.get('svg#svgcontent').trigger('mousedown', 10, 10, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 50, 50, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('button#lock').should('have.attr', 'title', 'Lock Aspect');
  cy.get('button#lock').click();
  cy.get('button#lock').should('have.attr', 'title', 'Unlock Aspect');
  cy.get('#selectorGrip_resize_se')
    .trigger('mousedown', { which: 1, pageX: 0, pageY: 0 })
    .trigger('mousemove', { which: 1, pageX: 200, pageY: 0 })
    .trigger('mouseup')
  cy.get('#w_size').should('have.value', '195');
  cy.get('#h_size').should('have.value', '195');
});
