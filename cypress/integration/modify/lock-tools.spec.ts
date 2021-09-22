it('lock', () => {
  cy.landingEditor();
  cy.get('div#left-Polygon>img').click();
  cy.get('svg#svgcontent').trigger('mousedown', 10, 10, { force: true });
  cy.get('svg#svgcontent').trigger('mousemove', 50, 50, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('div.dimension-lock > img').should('have.attr', 'src', 'img/right-panel/icon-lock.svg');
  cy.get('#selectorGrip_resize_se')
    .trigger('mousedown', { which: 1, pageX: 0, pageY: 0 })
    .trigger('mousemove', { which: 1, pageX: 200, pageY: 0 })
    .trigger('mouseup')
  cy.get('#width').should('have.value', '195');
  cy.get('#height').should('have.value', '195');
});
