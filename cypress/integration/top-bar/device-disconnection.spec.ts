describe('verify top bar behaviors under device disconnection', () => {
  beforeEach(() => {
    cy.landingEditor();
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

  it('toturial is unable to show when no machine', () => {
    cy.get('div.menu-btn-container').click();
    cy.get(':nth-child(5) > .rc-menu__item').click();
    cy.get(':nth-child(5) > .rc-menu > :nth-child(2)').click();
    cy.wait(5000);
    cy.get('.modal-alert').should('exist');
    cy.get('.message').should('have.text', 'Unable to find machine for Tutorial. Do you want to go to connection setting page, retry or skip tutorial?')
  });
});
