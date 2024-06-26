it('check clear scene', () => {
  cy.landingEditor();
  cy.clickToolBtn('Pen');
  cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('svg#svgcontent').trigger('mousedown', 300, 320, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('svg#svgcontent').trigger('mousedown', 220, 50, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('svg#svgcontent').trigger('mousedown', 40, 400, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('svg#svgcontent').trigger('mousedown', 100, 150, { force: true });
  cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });
  cy.get('#svg_1').should('exist');
  cy.get('div.menu-btn-container').click();
  cy.get(':nth-child(2) > .rc-menu__item').click();
  cy.get('.rc-menu').contains('New').click();
  cy.contains('button span', 'Yes').click();
  cy.get('#svg_1').should('not.exist');
});

it('check clear scene after reset', () => {
  cy.landingEditor();
  cy.go2Preference();
  cy.contains('Reset Beam Studio').click();
  cy.contains('Next').click();
  cy.contains('Work Offline').click();
  cy.contains('Skip').click();
  cy.get('button[class^="ant-btn"]').contains('No').click();
  cy.get('body').then((body) => {
    if (body.find('div.ant-modal-body').length > 0) {
      cy.get('button[class^="ant-btn"]').contains('No').click();
    }
  });
  cy.get('body').then((body) => {
    if (body.find('div.ant-modal-body').length > 0) {
      cy.get('button[class^="ant-btn"]').contains('No').click();
    }
  });
  cy.clickToolBtn('Pen');
  cy.get('svg#svgcontent').trigger('mousedown', 100, 100, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('svg#svgcontent').trigger('mousedown', 300, 320, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('svg#svgcontent').trigger('mousedown', 220, 50, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('svg#svgcontent').trigger('mousedown', 40, 400, { force: true });
  cy.get('svg#svgcontent').trigger('mouseup', { force: true });
  cy.get('svg#svgcontent').trigger('mousedown', 100, 150, { force: true });
  cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });
  cy.get('#svg_1').should('exist');
  cy.get('div.menu-btn-container').click();
  cy.get(':nth-child(2) > .rc-menu__item').click();
  cy.get('.rc-menu').contains('New').click();
  cy.contains('button span', 'Yes').click();
  cy.get('#svg_1').should('not.exist');
});
