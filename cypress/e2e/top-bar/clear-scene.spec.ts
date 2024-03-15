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
  cy.get(':nth-child(23)').contains('Clear Scene').click();
  cy.contains('button span', 'Yes').click()
  cy.get('#svg_1').should('not.exist');
});

function go2Preference() {
  cy.get('div.top-bar-menu-container').click();
  cy.get('li.rc-menu__submenu').should('have.length', 5);
  cy.get('li.rc-menu__submenu:nth-child(1)').trigger('mouseover');
  cy.get('li.rc-menu__submenu:nth-child(1) li.rc-menu__item:last-child').click({ force: true });
}

it('check clear scene after preference', () => {
  cy.landingEditor();
  go2Preference();
  cy.get('b').click();
  cy.get('.btn').contains('Next').click();
  cy.get('.skip').click();
  cy.get('.src-web-app-pages-SelectMachineModel-module__btn--vSspa').contains('Skip').click();
  cy.get('[type="button"]').contains('No').click();
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
  cy.get(':nth-child(23)').contains('Clear Scene').click();
  cy.contains('button span', 'Yes').click()
  cy.get('#svg_1').should('not.exist');
});
