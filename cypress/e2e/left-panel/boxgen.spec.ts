describe('boxgen', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('bexgen max', () => {
    cy.get('#left-Boxgen').click();
    cy.get('#width').type('999{enter}');
    cy.get('#width').should('have.value', '375');
  });

  it('bexgen min', () => {
    cy.get('#left-Boxgen').click();
    cy.get('#width').clear().type('20 {enter}');
    cy.get('#height').clear().type('20 {enter}');
    cy.get('#depth').clear().type('20 {enter}');
    cy.get('[title="Edge"]').should('be.visible').click();
    cy.get('.ant-select-item-option-disabled').contains('T-Slot').should('exist');
  });

  it('bexgen import', () => {
    cy.get('#left-Boxgen').click();
    cy.get('#width').clear().type('20 {enter}');
    cy.get('#height').clear().type('20 {enter}');
    cy.get('#depth').clear().type('20 {enter}');
    cy.contains('Continue to Import').click();
    cy.get('#textLabel > .ant-switch-inner').click();
    cy.get('.ant-modal-footer > .ant-btn-primary').click();
    cy.get('[data-color="#F44336"]')
      .should('exist')
      .should('contain', 'Top')
      .should('contain', 'Bottom')
      .should('contain', 'Front')
      .should('contain', 'Back');
  });
});
