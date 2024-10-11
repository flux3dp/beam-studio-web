describe('default unit test', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('should convert default units from mm to inches', () => {
    cy.get('.menu-btn-container').click();

    cy.contains('div[role="menuitem"]', 'File').click();

    cy.contains('li[role="menuitem"]', 'Preferences').click();

    cy.get('#set-default-units').select('Inches');

    // Verify that the unit for guide-x-input is now 'in' (inches)
    cy.get('input#guide-x-input').siblings('span.unit').should('have.text', 'in');
    // Verify that the unit for guide-y-input is now 'in' (inches)
    cy.get('input#guide-y-input').siblings('span.unit').should('have.text', 'in');
  });

  it('should convert default units from inches to mm', () => {
    cy.get('.menu-btn-container').click();

    cy.contains('div[role="menuitem"]', 'File').click();

    cy.contains('li[role="menuitem"]', 'Preferences').click();

    cy.get('#set-default-units').select('mm');

    // Verify that the unit for guide-x-input is now 'mm'
    cy.get('input#guide-x-input').siblings('span.unit').should('have.text', 'mm');
    // Verify that the unit for guide-y-input is now 'mm'
    cy.get('input#guide-y-input').siblings('span.unit').should('have.text', 'mm');
  });
});
