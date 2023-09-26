const zoomBlockPrefix = 'src-web-app-components-beambox-ZoomBlock-module_'

it('zoom in/out', () => {
  cy.landingEditor();
  cy.get(`[class*="${zoomBlockPrefix}_container"]`).should('exist');
  cy.get(`[class*="${zoomBlockPrefix}_container"] img[src="img/icon-minus.svg"]`).parent().should('exist');
  cy.get(`[class*="${zoomBlockPrefix}_container"] img[src="img/icon-plus.svg"]`).parent().should('exist');

  let zoomRatio;
  cy.get(`[class*="${zoomBlockPrefix}_ratio"]`).should(($div) => {
    zoomRatio = parseInt($div.text().replace('%', ''));
  });

  cy.get(`[class*="${zoomBlockPrefix}_container"] img[src="img/icon-plus.svg"]`).parent().click();
  cy.get(`[class*="${zoomBlockPrefix}_ratio"]`).should(($div) => {
    expect(parseInt($div.text().replace('%', '')) > zoomRatio).to.be.true;
    zoomRatio = parseInt($div.text().replace('%', ''));
  });

  cy.get(`[class*="${zoomBlockPrefix}_container"] img[src="img/icon-minus.svg"]`).parent().click();
  cy.get(`[class*="${zoomBlockPrefix}_ratio"]`).should(($div) => {
    expect(parseInt($div.text().replace('%', '')) < zoomRatio).to.be.true;
  });
});
