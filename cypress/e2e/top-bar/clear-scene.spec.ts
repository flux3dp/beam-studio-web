// it('check clear scene', () => {
//   cy.landingEditor();
//   cy.get('div#left-Pen>img').click();
//   cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
//   cy.get('svg#svgcontent').trigger('mouseup', { force: true });
//   cy.get('svg#svgcontent').trigger('mousedown', 300, 320, { force: true });
//   cy.get('svg#svgcontent').trigger('mouseup', { force: true });
//   cy.get('svg#svgcontent').trigger('mousedown', 220, 50, { force: true });
//   cy.get('svg#svgcontent').trigger('mouseup', { force: true });
//   cy.get('svg#svgcontent').trigger('mousedown', 40, 400, { force: true });
//   cy.get('svg#svgcontent').trigger('mouseup', { force: true });
//   cy.get('svg#svgcontent').trigger('mousedown', 100, 150, { force: true });
//   cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });
//   cy.get('#svg_1').should('exist');
//   cy.get('div.menu-btn-container').click();
//   cy.get(':nth-child(2) > .rc-menu__item').click();
//   cy.get(':nth-child(23)').click();
//   cy.get('[data-test-key="yes"]').click();
//   cy.get('#svg_1').should('not.exist');
// });
