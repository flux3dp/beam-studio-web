describe('Printing Expand Layer', () => {
  it('Expand Layer', () => {
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
  cy.get('.ant-select-selection-item')
    .contains('20W Diode Laser')
    .click();
  cy.get('.ant-select-item-option-content')
    .contains('Printing')
    .click();
  cy.get('.ant-btn')
    .contains('Confirm')
    .click();
  //驗證預噴區
  cy.get('#presprayArea').should('be.visible');
  cy.get('#left-Element.tool-btn').click();
  cy.get('.anticon.src-web-app-views-beambox-ShapePanel-ShapePanel-module__icon--YhfHN')
    .eq(0)
    .click();
  cy.get('#svg_1').should('be.visible').click();
  cy.get('.src-web-app-widgets-ColorPicker-module__color--Q6lUp[style="background: rgb(91, 91, 91);"]').click();
  cy.get('.src-web-app-widgets-ColorPicker-module__inner---5lat[style="background-color: rgb(114, 46, 209);"]').click();
  cy.get('.ant-btn')
    .contains('OK')
    .click();
  cy.get('.tab-icon[src="img/right-panel/icon-layers.svg"]').click();
  cy.get('.src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF').rightclick();
  cy.get('.react-contextmenu-item').contains('Expand Layer').click();
  cy.get('.ant-btn')
    .contains('Confirm')
    .click();

  // 驗證K可見
  cy.get('#svg_2').should('be.visible')
    .invoke('attr', 'filter').should('eq', 'url(#filter#1D1D1B)');

  cy.get('.src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF[data-layer="Layer 1 (K)"]').click();
  cy.get('.src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF[data-layer="Layer 1 (K)"]').rightclick();
  cy.get('.react-contextmenu-item').contains('Delete Layer').click();
  // 驗證C可見
  cy.get('#svg_3').should('be.visible')
    .invoke('attr', 'filter').should('eq', 'url(#filter#009FE3)');

  cy.get('.src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF[data-layer="Layer 1 (C)"]').click();
  cy.get('.src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF[data-layer="Layer 1 (C)"]').rightclick();
  cy.get('.react-contextmenu-item').contains('Delete Layer').click();
  // 驗證M可見
  cy.get('#svg_4').should('be.visible')
    .invoke('attr', 'filter').should('eq', 'url(#filter#E6007E)');

  cy.get('.src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF[data-layer="Layer 1 (M)"]').click();
  cy.get('.src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF[data-layer="Layer 1 (M)"]').rightclick();
  cy.get('.react-contextmenu-item').contains('Merge Down').click();
  // 驗證向下合併Y可見
  cy.get('#svg_4').should('be.visible')
    .invoke('attr', 'filter').should('eq', 'url(#filter#FFED00)');


  });
});
