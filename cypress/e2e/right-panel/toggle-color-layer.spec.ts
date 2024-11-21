describe('machine selection and svg dimensions test', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  // 20W Diode LaserCustom
  it('toggle-single-full-color-layer', () => {
    cy.get('.src-web-app-components-beambox-top-bar-TopBar-module__menu--Oh39C').click();

    cy.contains('li.rc-menu__submenu', 'Edit').click();

    cy.contains('li[role="menuitem"]', 'Document Settings').click();

    cy.get('span.ant-select-selection-item').click({ multiple: true, force: true });
    cy.contains('.ant-select-item-option-content', 'Ador').click();

    cy.contains('span', 'Save')
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });

    cy.contains('span.ant-select-selection-item', '20W Diode Laser')
      .click();

    cy.contains('div.ant-select-item-option-content', 'Printing')
      .should('be.visible')
      .click();

    cy.contains('button.ant-btn', 'Confirm')
      .should('be.visible')
      .click({ force: true });

    cy.get('div#layerdoubleclick-0')
      .rightclick();
    cy.get('div#toggle_fullcolor_layer')
      .should('exist', 'Switch to single color layer')
      .click();

    cy.wait(1500);

    cy.get('div#layerdoubleclick-0')
      .rightclick();
    cy.get('div#toggle_fullcolor_layer')
      .should('exist', 'Switch to full color layer')
      .click();
  });
});
