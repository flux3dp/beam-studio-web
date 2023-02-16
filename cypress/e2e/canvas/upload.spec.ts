describe('upload tools', () => {
  it('upload png', () => {
    cy.landingEditor();
    cy.uploadFile('flux.png', 'image/png');
    cy.get('#svg_1').should('exist');
    cy.get('#width').should('have.value', '300');
    cy.get('#height').should('have.value', '210');
  });

  it('upload jpg', () => {
    cy.landingEditor();
    cy.uploadFile('map.jpg', 'image/jpg');
    cy.get('#svg_1').should('exist');
    cy.get('#width').should('have.value', '553');
    cy.get('#height').should('have.value', '387.9');
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
    cy.get('div.modal-alert > .button-group > .btn').click();
    cy.get('[data-test-key="ok"]').click();
    cy.get('[data-test-key="ok"]').click();
    cy.wait(1000);
    cy.get('#svg_1').should('exist');
    cy.get('svg#svgcontent').trigger('mousedown', 200, 200, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 400, 400, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });
    cy.get('#width').should('have.attr', 'value').and('eq', '522.17');
    cy.get('#height').should('have.attr', 'value').and('eq', '465.52');
  });
});
