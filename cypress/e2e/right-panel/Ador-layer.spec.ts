describe('Ador Layer', () => {
  beforeEach(() => {
  cy.landingEditor();
  //切換至Ador
  cy.get('div.menu-btn-container').click();
  cy.get('.rc-menu__submenu').contains("Edit").click();
  cy.contains('Document Settings').click();
  cy.wait(500);
  cy.get('[class^="ant-select-selection-item"]')
    .eq(0)
    .click();
  cy.wait(700);
  cy.get('[class^="ant-select-item-option-content"]')
    .contains('Ador')
    .click({force: true});
    cy.get('button[class^="ant-btn"]')
    .contains('Save')
    .click({force: true});
  cy.wait(500);
  });
  it('Default Laser Module', () => {
    cy.get('[class="menu-btn-container"]').click();
    cy.get('[class="rc-menu__item"]').contains('File').click();
    cy.get('[class="rc-menu__item"]').contains('Preferences').click();
    cy.get('button[class^="ant-btn"]').contains('Don\'t Save').click();
    cy.get('#default-laser-module').select('10W Diode Laser');
    cy.get('[class="btn btn-done"]').contains('Apply').click();
    cy.get('div.menu-btn-container').click();
    cy.get('.rc-menu__submenu').contains("Edit").click();
    cy.contains('Document Settings').click();
    cy.wait(500);
    cy.get('[class^="ant-select-selection-item"]')
      .eq(0)
      .click();
    cy.wait(700);
    cy.get('[class^="ant-select-item-option-content"]')
      .contains('Ador')
      .click({force: true});
      cy.get('button[class^="ant-btn"]')
      .contains('Save')
      .click({force: true});
    cy.wait(500);
    cy.get('[class="ant-select-selector"]')
      .should('have.text', '10W Diode Laser');
  });
  it('Default Laser Module', () => {
    cy.get('[class="src-web-app-components-beambox-right-panel-AddLayerButton-module__btn--i7y6f"]')
      .click({force: true});
    cy.get('[class="ant-select-selector"]')
      .click();
    cy.get('[class="ant-select-item-option-content"]')
      .contains('Printing')
      .click();
    cy.get('[class="ant-modal-title"]')
      .should('have.text', 'Do you want to convert the Laser module into Printing module?');
    cy.get('button[class^="ant-btn"]').contains('Confirm')
      .should('exist').click({force: true});
    cy.get('[class="src-web-app-components-beambox-right-panel-AddLayerButton-module__btn--i7y6f"]')
      .click({force: true});
    cy.get('[class="src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF"]')
      .contains('Layer 3')
      .rightclick();
    cy.get('#merge_down_layer').click();
    cy.get('[class="ant-modal-title"]')
      .should('have.text', 'Do you want to merge these layers into one Printing layer?');
    cy.get('button[class^="ant-btn"]').contains('Confirm')
      .should('exist').click({force: true});
    cy.get('[class="src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF"]')
      .contains('Layer 2')
      .rightclick();
    cy.get('#merge_down_layer').click();
    cy.get('[class="ant-modal-title"]')
      .should('have.text', 'Do you want to merge these layers into one Laser layer?');
    cy.get('button[class^="ant-btn"]').contains('Confirm')
      .should('exist').click({force: true});
  });
});
