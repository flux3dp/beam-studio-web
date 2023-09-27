const zoomBlockPrefix = 'src-web-app-components-beambox-ZoomBlock-module_';
const zoomRatio = () => cy.get(`[class*="${zoomBlockPrefix}_ratio"]`);

it('zoom in/out', () => {
  cy.landingEditor();
  cy.get(`[class*="${zoomBlockPrefix}_container"]`).should('exist');
  cy.get(`[class*="${zoomBlockPrefix}_container"] img[src="img/icon-minus.svg"]`).parent().should('exist');
  cy.get(`[class*="${zoomBlockPrefix}_container"] img[src="img/icon-plus.svg"]`).parent().should('exist');

  let zoomRatio;
  zoomRatio().should(($div) => {
    zoomRatio = parseInt($div.text().replace('%', ''));
  });

  cy.get(`[class*="${zoomBlockPrefix}_container"] img[src="img/icon-plus.svg"]`).parent().click();
  zoomRatio().should(($div) => {
    expect(parseInt($div.text().replace('%', '')) > zoomRatio).to.be.true;
    zoomRatio = parseInt($div.text().replace('%', ''));
  });

  cy.get(`[class*="${zoomBlockPrefix}_container"] img[src="img/icon-minus.svg"]`).parent().click();
  zoomRatio().should(($div) => {
    expect(parseInt($div.text().replace('%', '')) < zoomRatio).to.be.true;
  });
});
