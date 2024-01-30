describe('upload tools', () => {
  it('upload png', () => {
    cy.landingEditor();
    cy.wait(500);
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#svg_1').should('exist');
    cy.get('#w_size').should('have.value', '300.00');
    cy.get('#h_size').should('have.value', '210.00');
  });

  it('upload jpg', () => {
    cy.landingEditor();
    cy.uploadFile('map.jpg', 'image/jpg');
    cy.get('#svg_1').should('exist');
    cy.get('#w_size').should('have.value', '553.00');
    cy.get('#h_size').should('have.value', '387.90');
  });

  it('upload dxf', () => {
    cy.landingEditor();
    cy.fixture('basket.dxf').then(fileContent => {
      cy.get("input[data-file-input='import_image").attachFile({
        fileContent: fileContent.toString(),
        fileName: 'basket.dxf',
        mimeType: 'application/dxf'
      });
    });
    cy.get('div[id^="rc_unique_3"]').should('be.exist');
    cy.get('button[class^="ant-btn"]').contains('OK').should('be.exist').click({ force: true });
    cy.get('button[class^="ant-btn"]').contains('OK').should('be.exist').click({ force: true });
    cy.get('button[class^="ant-btn"]').contains('OK').should('be.exist').click({ force: true });
    cy.wait(1000);
    cy.get('#svg_1').should('exist');
    cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.wait(500);
    cy.get('#w_size').should('have.attr', 'value').and('eq', '522.17');
    cy.get('#h_size').should('have.attr', 'value').and('eq', '465.52');
  });

  it('upload Printing Beam to laser layer', () => {
    cy.landingEditor();
    cy.get('div.menu-btn-container').click();
    cy.get('.rc-menu__submenu').contains("Edit").click();
    cy.contains('Document Settings').click();
    cy.wait(500);
    cy.get('[class^="ant-select-selection-item"]').eq(0).click();
    cy.wait(700);
    cy.get('[class^="ant-select-item-option-content"]').contains('Ador').click({force: true});
    cy.get('button[class^="ant-btn"]').contains('Save').click({force: true});
    cy.wait(500);
    cy.uploadFile('printing.beam');
    cy.get('.src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF')
      .should('have.attr', 'data-layer', '預設圖層');
    cy.get('.ant-select-selection-item').should('have.attr', 'title', 'Printing');
  });

  it('upload Laser Beam to printing layer', () => {
    cy.landingEditor();
    cy.get('div.menu-btn-container').click();
    cy.get('.rc-menu__submenu').contains("Edit").click();
    cy.contains('Document Settings').click();
    cy.wait(500);
    cy.get('[class^="ant-select-selection-item"]').eq(0).click();
    cy.wait(700);
    cy.get('[class^="ant-select-item-option-content"]').contains('Ador').click({force: true});
    cy.get('button[class^="ant-btn"]').contains('Save').click({force: true});
    cy.wait(500);
    cy.get('[class="ant-select-selector"]')
      .click();
    cy.get('[class="ant-select-item-option-content"]')
      .contains('Printing')
      .click();
    cy.get('[class="ant-modal-title"]')
      .should('have.text', 'Do you want to convert the Laser module into Printing module?');
    cy.get('button[class^="ant-btn"]').contains('Confirm')
      .should('exist').click({force: true});
    cy.uploadFile('laser.beam');
    cy.get('.src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF')
      .should('have.attr', 'data-layer', '預設圖層');
    cy.get('.ant-select-selection-item').should('have.attr', 'title', '20W Diode Laser');
  });

  it('upload Printing Beam to Beamseries', () => {
    cy.landingEditor();
    cy.uploadFile('printing.beam');
    cy.get('.ant-modal-content').contains('The document contains printing layer, would you like to change workarea to Ador?')
      .should('exist');
    cy.get('.ant-btn').contains('Yes').click();
    cy.get('.src-web-app-views-beambox-Right-Panels-LayerPanel-LayerList-module__row--2O-iF')
      .should('have.attr', 'data-layer', '預設圖層');
    cy.get('.ant-select-selection-item').should('have.attr', 'title', 'Printing');
  });

});
