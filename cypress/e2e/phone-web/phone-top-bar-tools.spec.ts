it('check the existence of the tab-bar  tool', () => {
  cy.landingEditor();
  cy.viewport('iphone-xr');
  cy.get('.top-bar.src-web-app-components-beambox-top-bar-TopBar-module__top-bar--Clrde').should('exist');
  cy.get('.top-bar-menu-container.src-web-app-components-beambox-top-bar-TopBar-module__menu--Oh39C').should('exist');
  cy.get('.src-web-app-components-beambox-top-bar-CommonTools-module__common-tools-container--bV-00').should('exist');
  cy.get('.src-web-app-components-beambox-top-bar-TopBar-module__right--tTeXN').should('exist');

  cy.get('.menu-btn-container').click();
  cy.get('.rc-menu__item').contains('File').should('exist');
  cy.get('.rc-menu__item').contains('Edit').should('exist');
  cy.get('.rc-menu__item').contains('View').should('exist');
  cy.get('.rc-menu__item').contains('Machines').should('exist');
  cy.get('.rc-menu__item').contains('Help').should('exist');

  });
