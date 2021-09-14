it('zoom in/out', () => {
  cy.landingEditor();

  cy.get('div.zoom-btn.zoom-out').should('exist');
  cy.get('div.zoom-ratio').should('exist');
  cy.get('div.zoom-btn.zoom-in').should('exist');

  let zoomRatio;
  cy.get('div.zoom-ratio').should(($div) => {
    zoomRatio = parseInt($div.text().replace('%', ''));
  });

  cy.get('div.zoom-btn.zoom-in').click();
  cy.get('div.zoom-ratio').should(($div) => {
    expect(parseInt($div.text().replace('%', '')) > zoomRatio).to.be.true;
    zoomRatio = parseInt($div.text().replace('%', ''));
  });

  cy.get('div.zoom-btn.zoom-out').click();
  cy.get('div.zoom-ratio').should(($div) => {
    expect(parseInt($div.text().replace('%', '')) < zoomRatio).to.be.true;
  });
});
