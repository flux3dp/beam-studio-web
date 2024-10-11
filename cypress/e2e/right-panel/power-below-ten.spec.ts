describe('power input validation', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('should not show warning when power is 10 or above', () => {
    cy.get('#power-input').clear().type('10');
    cy.get('#power-input').type('{enter}');
    cy.get('.src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__warning--aboql')
      .should('not.exist');

    cy.get('#power-input').clear().type('11');
    cy.get('#power-input').type('{enter}');
    cy.get('.src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__warning--aboql')
      .should('not.exist');
  });

  it('should handle decimal values correctly', () => {
    cy.get('#power-input').clear().type('9.9');
    cy.get('#power-input').type('{enter}');
    cy.get('.src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__warning--aboql')
      .should('be.visible');

    cy.get('#power-input').clear().type('10.1');
    cy.get('#power-input').type('{enter}');
    cy.get('.src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__warning--aboql')
      .should('not.exist');
  });

  it('should handle extreme low values', () => {
    cy.get('#power-input').clear().type('0');
    cy.get('#power-input').type('{enter}');
    cy.get('#power-input').should('have.value', '1');
    cy.get('.src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__warning--aboql')
      .should('be.visible');

    cy.get('#power-input').clear().type('-1');
    cy.get('#power-input').type('{enter}');
    cy.get('.src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__warning--aboql')
      .should('be.visible');
  });

  it('should handle extreme high values', () => {
    cy.get('#power-input').clear().type('100');
    cy.get('#power-input').type('{enter}');
    cy.get('.src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__warning--aboql')
      .should('not.exist');

    cy.get('#power-input').clear().type('1000');
    cy.get('#power-input').type('{enter}');
    cy.get('.src-web-app-views-beambox-Right-Panels-ConfigPanel-Block-module__warning--aboql')
      .should('not.exist');
  });

  it('should handle non-numeric input', () => {
    cy.get('#power-input').clear().type('abc');
    cy.get('#power-input').type('{enter}');
    cy.get('#power-input').should('have.value', '15.0');
  });
});
