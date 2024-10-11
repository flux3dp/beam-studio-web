describe('default unit test', () => {
    // Set up the test environment before each test
    beforeEach(() => {
        cy.landingEditor();
    });

    // Test case for converting units from mm to inches
    it('should convert default units from mm to inches', () => {
        // Open the menu
        cy.get('.menu-btn-container').click();

        // Navigate to File menu
        cy.contains('div[role="menuitem"]', 'File').click();

        // Click on Preferences
        cy.contains('li[role="menuitem"]', 'Preferences').click();

        // Select Inches as the default unit
        cy.get('#set-default-units').select('Inches');

        // Verify that the unit for guide-x-input is now 'in' (inches)
        cy.get('input#guide-x-input').siblings('span.unit').should('have.text', 'in');
        // Verify that the unit for guide-y-input is now 'in' (inches)
        cy.get('input#guide-y-input').siblings('span.unit').should('have.text', 'in');
    });

    // Test case for converting units from inches to mm
    it('should convert default units from inches to mm', () => {
        // Open the menu
        cy.get('.menu-btn-container').click();

        // Navigate to File menu
        cy.contains('div[role="menuitem"]', 'File').click();

        // Click on Preferences
        cy.contains('li[role="menuitem"]', 'Preferences').click();

        // Select mm as the default unit
        cy.get('#set-default-units').select('mm');

        // Verify that the unit for guide-x-input is now 'mm'
        cy.get('input#guide-x-input').siblings('span.unit').should('have.text', 'mm');
        // Verify that the unit for guide-y-input is now 'mm'
        cy.get('input#guide-y-input').siblings('span.unit').should('have.text', 'mm');
    });
});
