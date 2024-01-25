describe('speed-limit-warning', () => {
    beforeEach(() => {
        cy.landingEditor();
      });    

  it('speed-limit-warning', () => {
    cy.get('div#left-Line>img').click();
    cy.get('svg#svgcontent')
    .trigger('mousedown', { pageX: 100, pageY: 200, force: true })
    .trigger('mousemove', { pageX: 250, pageY: 250, force: true })
    .trigger('mouseup', { force: true });
    cy.wait(500);
    cy.get(`[class*="src-web-app-components-beambox-right-panel-RightPanel-module__sidepanels--nTMgS"] img[src="img/right-panel/icon-layers.svg"]`).click();
    cy.get('#speed-input').should('have.attr', 'value', '20');
    cy.get('#speed-input')
    .clear()
    .type('50')
    .type('{enter}')
    .should('have.value','50');
    cy.contains("The cutting speed of vector path objects will be constrained to 20 mm/s (0.79in/s).You can remove this limit at Preferences Settings.").should('exist');
  })
})