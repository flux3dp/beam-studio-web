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
  it('Merge Printing & Laser Layer', () => {
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

  it('Move to Printing or Laser', () => {
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
    cy.get('#left-Element.tool-btn').click();
    cy.get('.anticon.src-web-app-views-beambox-ShapePanel-ShapePanel-module__icon--YhfHN')
      .eq(0)
      .click();
    cy.get('#svg_1').click();
    cy.get('[class="tab layers"]').click();
    cy.get('[class="src-web-app-components-beambox-right-panel-SelLayerBlock-module__select--dYlA+"]')
      .select('Layer 1');
    cy.get('[class="ant-modal-title"]')
      .should('have.text', 'Move selected element to Layer 1 and convert it into laser element?');
    cy.get('button[class^="ant-btn"]').contains('Cancel')
      .should('exist');
    cy.get('button[class^="ant-btn"]').contains('Confirm')
      .should('exist').click({force: true});

    cy.get('#svg_1').click();
    cy.get('[class="src-web-app-components-beambox-right-panel-SelLayerBlock-module__select--dYlA+"]')
      .select('Layer 2');
    cy.get('[class="ant-modal-title"]')
      .should('have.text', 'Move selected element to Layer 2 and convert it into printing element?');
    cy.get('button[class^="ant-btn"]').contains('Cancel')
      .should('exist');
    cy.get('button[class^="ant-btn"]').contains('Confirm')
      .should('exist').click({force: true});
  });

  it('Printing Parameter Settings Advanced Off', () => {
    cy.get('[class="menu-btn-container"]').click();
    cy.get('[class="rc-menu__item"]').contains('File').click();
    cy.get('[class="rc-menu__item"]').contains('Preferences').click();
    cy.get('button[class^="ant-btn"]').contains('Don\'t Save').click();
    cy.get('#print-advanced-mode').select('Off');
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
    cy.get('[class="ant-select-selector"]')
      .click();
    cy.get('[class="ant-select-item-option-content"]')
      .contains('Printing')
      .click();
    cy.get('[class="ant-modal-title"]')
      .should('have.text', 'Do you want to convert the Laser module into Printing module?');
    cy.get('button[class^="ant-btn"]').contains('Confirm')
      .should('exist').click({force: true});
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-InkBlock-module__panel--vp9bJ"]>[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigValueDisplay-module__value--Ximwq"]')
      .should('exist').should('have.text', 'Regular');
    cy.get('#saturation div.ant-slider-handle').trigger('mousedown');
    cy.get('#saturation div.ant-slider-handle').trigger('mousemove', -100, 0, { force: true });
    cy.get('#saturation div.ant-slider-handle').trigger('mouseup');
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-InkBlock-module__panel--vp9bJ"]>[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigValueDisplay-module__value--Ximwq"]')
      .should('exist').should('have.text', 'Min');
    cy.get('#saturation div.ant-slider-handle').trigger('mousedown');
    cy.get('#saturation div.ant-slider-handle').trigger('mousemove', 50, 0, { force: true });
    cy.get('#saturation div.ant-slider-handle').trigger('mouseup');
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-InkBlock-module__panel--vp9bJ"]>[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigValueDisplay-module__value--Ximwq"]')
      .should('exist').should('have.text', 'Low');
    cy.get('#saturation div.ant-slider-handle').trigger('mousedown');
    cy.get('#saturation div.ant-slider-handle').trigger('mousemove', 100, 0, { force: true });
    cy.get('#saturation div.ant-slider-handle').trigger('mouseup');
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-InkBlock-module__panel--vp9bJ"]>[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigValueDisplay-module__value--Ximwq"]')
      .should('exist').should('have.text', 'High');
    cy.get('#saturation div.ant-slider-handle').trigger('mousedown');
    cy.get('#saturation div.ant-slider-handle').trigger('mousemove', 50, 0, { force: true });
    cy.get('#saturation div.ant-slider-handle').trigger('mouseup');
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-InkBlock-module__panel--vp9bJ"]>[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigValueDisplay-module__value--Ximwq"]')
      .should('exist').should('have.text', 'Max');
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__panel--ap9ab"]>[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigValueDisplay-module__value--Ximwq"]')
      .first().should('exist').should('have.text', 'Regular');
    cy.get('#speed div.ant-slider-handle').trigger('mousedown');
    cy.get('#speed div.ant-slider-handle').trigger('mousemove', -100, 0, { force: true });
    cy.get('#speed div.ant-slider-handle').trigger('mouseup');
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__panel--ap9ab"]>[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigValueDisplay-module__value--Ximwq"]')
      .first().should('exist').should('have.text', 'Slowest');
    cy.get('#speed div.ant-slider-handle').trigger('mousedown');
    cy.get('#speed div.ant-slider-handle').trigger('mousemove', 50, 0, { force: true });
    cy.get('#speed div.ant-slider-handle').trigger('mouseup');
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__panel--ap9ab"]>[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigValueDisplay-module__value--Ximwq"]')
      .first().should('exist').should('have.text', 'Slow');
    cy.get('#speed div.ant-slider-handle').trigger('mousedown');
    cy.get('#speed div.ant-slider-handle').trigger('mousemove', 100, 0, { force: true });
    cy.get('#speed div.ant-slider-handle').trigger('mouseup');
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__panel--ap9ab"]>[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigValueDisplay-module__value--Ximwq"]')
      .first().should('exist').should('have.text', 'Fast');
    cy.get('#speed div.ant-slider-handle').trigger('mousedown');
    cy.get('#speed div.ant-slider-handle').trigger('mousemove', 50, 0, { force: true });
    cy.get('#speed div.ant-slider-handle').trigger('mouseup');
    cy.get('[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__panel--ap9ab"]>[class="src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigValueDisplay-module__value--Ximwq"]')
      .first().should('exist').should('have.text', 'Fastest');
    cy.get('.src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__panel--ap9ab .src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigValueDisplay-module__value--Ximwq')
      .eq(1).should('exist').should('have.text', '3');
    cy.get('#multipass div.ant-slider-handle').trigger('mousedown');
    cy.get('#multipass div.ant-slider-handle').trigger('mousemove', -30, 0, { force: true });
    cy.get('#multipass div.ant-slider-handle').trigger('mouseup');
    cy.get('.src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__panel--ap9ab .src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigValueDisplay-module__value--Ximwq')
      .eq(1).should('exist').should('have.text', '2');
    cy.get('#multipass div.ant-slider-handle').trigger('mousedown');
    cy.get('#multipass div.ant-slider-handle').trigger('mousemove', 150, 0, { force: true });
    cy.get('#multipass div.ant-slider-handle').trigger('mouseup');
    cy.get('.src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__panel--ap9ab .src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigValueDisplay-module__value--Ximwq')
      .eq(1).should('exist').should('have.text', '4');
    cy.get('#multipass div.ant-slider-handle').trigger('mousedown');
    cy.get('#multipass div.ant-slider-handle').trigger('mousemove', 50, 0, { force: true });
    cy.get('#multipass div.ant-slider-handle').trigger('mouseup');
    cy.get('.src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__panel--ap9ab .src-web-app-views-beambox-Right-Panels-ConfigPanel-ConfigValueDisplay-module__value--Ximwq')
      .eq(1).should('exist').should('have.text', '5');

  });

  it('Printing Parameter Settings Advanced On', () => {
    cy.get('[class="menu-btn-container"]').click();
    cy.get('[class="rc-menu__item"]').contains('File').click();
    cy.get('[class="rc-menu__item"]').contains('Preferences').click();
    cy.get('button[class^="ant-btn"]').contains('Don\'t Save').click();
    cy.get('#print-advanced-mode').select('On');
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
    cy.get('[class="ant-select-selector"]')
      .click();
    cy.get('[class="ant-select-item-option-content"]')
      .contains('Printing')
      .click();
    cy.get('[class="ant-modal-title"]')
      .should('have.text', 'Do you want to convert the Laser module into Printing module?');
    cy.get('button[class^="ant-btn"]').contains('Confirm')
      .should('exist').click({force: true});

    cy.get('#saturation-input')
      .should('exist').should('have.attr' ,'value' ,'3');
    cy.get('#saturation div.ant-slider-handle').trigger('mousedown');
    cy.get('#saturation div.ant-slider-handle').trigger('mousemove', -200, 0, { force: true });
    cy.get('#saturation div.ant-slider-handle').trigger('mouseup');
    cy.get('#saturation-input')
      .should('exist').should('have.attr' ,'value' ,'1');
    cy.get('#saturation div.ant-slider-handle').trigger('mousedown');
    cy.get('#saturation div.ant-slider-handle').trigger('mousemove', 500, 0, { force: true });
    cy.get('#saturation div.ant-slider-handle').trigger('mouseup');
    cy.get('#saturation-input')
      .should('exist').should('have.attr' ,'value' ,'15');
    cy.get('#saturation-input').clear().type('5');
    cy.get('#saturation-input').should('exist').should('have.attr' ,'value' ,'5');

    cy.get('#speed-input')
      .should('exist').should('have.attr' ,'value' ,'60');
    cy.get('#speed div.ant-slider-handle').trigger('mousedown');
    cy.get('#speed div.ant-slider-handle').trigger('mousemove', -200, 0, { force: true });
    cy.get('#speed div.ant-slider-handle').trigger('mouseup');
    cy.get('#speed-input')
      .should('exist').should('have.attr' ,'value' ,'0.5');
    cy.get('#speed div.ant-slider-handle').trigger('mousedown');
    cy.get('#speed div.ant-slider-handle').trigger('mousemove', 500, 0, { force: true });
    cy.get('#speed div.ant-slider-handle').trigger('mouseup');
    cy.get('#speed-input')
      .should('exist').should('have.attr' ,'value' ,'400');
    cy.get('#speed-input').clear().type('100');
    cy.get('#speed-input').should('exist').should('have.attr' ,'value' ,'100');

    cy.get('#multipass-input')
      .should('exist').should('have.attr' ,'value' ,'3');
    cy.get('#multipass div.ant-slider-handle').trigger('mousedown');
    cy.get('#multipass div.ant-slider-handle').trigger('mousemove', -200, 0, { force: true });
    cy.get('#multipass div.ant-slider-handle').trigger('mouseup');
    cy.get('#multipass-input')
      .should('exist').should('have.attr' ,'value' ,'1');
    cy.get('#multipass div.ant-slider-handle').trigger('mousedown');
    cy.get('#multipass div.ant-slider-handle').trigger('mousemove', 500, 0, { force: true });
    cy.get('#multipass div.ant-slider-handle').trigger('mouseup');
    cy.get('#multipass-input')
      .should('exist').should('have.attr' ,'value' ,'10');
    cy.get('#multipass-input').clear().type('5');
    cy.get('#multipass-input').should('exist').should('have.attr' ,'value' ,'5');


  });

});
