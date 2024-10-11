describe('machine selection and svg dimensions test', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  // 20W Diode LaserCustom
  it('toggle-single-full-color-layer', () => {
    // Click on the top bar menu container
    cy.get('.src-web-app-components-beambox-top-bar-TopBar-module__menu--Oh39C').click();

    // Click on the "Edit" submenu
    cy.contains('li.rc-menu__submenu', 'Edit').click();

    // Click on "Document Settings"
    cy.contains('li[role="menuitem"]', 'Document Settings').click();

    // Select the machine from the dropdown
    cy.get('span.ant-select-selection-item').click({ multiple: true, force: true });
    cy.contains('.ant-select-item-option-content', 'Ador').click();

    // Click the confirm button
    cy.contains('span', 'Save')
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });

    cy.contains('span.ant-select-selection-item', '20W Diode Laser')
      .click(); // Perform the click action

    // Ensure the element is visible before clicking
    cy.contains('div.ant-select-item-option-content', 'Printing')
      .should('be.visible') // Assert that the element is visible
      .click(); // Perform the click action

    // Ensure the button is visible before clicking
    cy.contains('button.ant-btn', 'Confirm')
      .should('be.visible')
      .click({ force: true });

    // right click
    // 'div#toggle_fullcolor_layer'      
    // check exist or not : Switch to single color layer      
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