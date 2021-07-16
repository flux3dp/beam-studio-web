describe('manipulate layers', () => {
  before(() => {
    cy.landing();
  });

  it('the side panel and its components should exist', () => {
    cy.get('div#sidepanels').should('exist');
    cy.get('div.right-panel-tabs').should('exist');
    cy.get('div#layerpanel').should('exist');
    cy.get('div#laser-panel').should('exist');
  });

  it('there is only one layer by default', () => {
    cy.get('div.layer').should('have.length', 1);
    cy.get('div.layer').should('have.class', 'current');
    cy.get('div.layer div.layername').should('have.text', 'Layer 1');
    cy.get('div#laser-panel div.layername').should('have.text', 'Parameter Settings (Layer 1)');
  });

  it('add one new layer', () => {
    cy.get('div.add-layer-btn').should('exist');
    cy.get('div.add-layer-btn').click();
    cy.get('div.layer').should('have.length', 2);
    cy.get('div.layer:nth-child(1)').should('have.class', 'current');
    cy.get('div.layer:nth-child(2)').should('not.have.class', 'current');
    cy.get('div#laser-panel div.layername').should('have.text', 'Parameter Settings (Layer 2)');
  });

  it('rename the new layer', () => {
    cy.get('div.layer:nth-child(1)').dblclick();
    cy.get('input.text-input').clear().type('Hello Flux');
    cy.get('button[data-test-key="ok"]').click();
    cy.get('div#laser-panel div.layername').should('have.text', 'Parameter Settings (Hello Flux)');
  });
});
