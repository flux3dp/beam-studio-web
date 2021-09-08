describe('verify top bar behaviors under device disconnection', () => {
  beforeEach(() => {
    cy.landing();
  });

  it('show #801 while clicking on preview button', () => {
    cy.get('div.preview-button-container').should('exist');
    cy.get('div.preview-button-container').click().click();
    cy.get('pre.message').contains('#801');
  });

  it('show #801 while clicking on GO button', () => {
    cy.get('div.go-btn').should('exist');
    cy.get('div.go-btn').click();
    cy.get('pre.message').contains('#801');
  });

  it('path-preview button is disabled when no machine', () => {
    cy.get('div.path-preview-button').should('exist');
    cy.get('div.path-preview-button-container').should('have.class', 'disabled');
  });
});
