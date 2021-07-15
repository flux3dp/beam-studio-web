describe('check preview tools', () => {
  before(() => {
    cy.landing();
  });

  it('go to preview mode', () => {
    cy.get('div.preview-button-container').should('exist');
    cy.get('div.preview-button-container').click();
    cy.get('div.preview-button-container').should('have.class', 'previewing');
    cy.get('div.preview-button-container > div.title').should('have.text', 'PREVIEW');
  });

  it('check the existence of the preview tools', () => {
    cy.get('#left-Exit-Preview').should('exist');
    cy.get('#left-Shoot').should('exist');
    cy.get('#left-Trace').should('exist');
    cy.get('#left-Trash').should('exist');
  });

  it('back to drawing mode', () => {
    cy.get('#left-Exit-Preview').click();
    cy.get('div.preview-button-container').should('not.have.class', 'previewing');
    cy.get('div.preview-button-container > div.title').should('not.exist');
    cy.get('#left-Exit-Preview').should('not.exist');
    cy.get('#left-Shoot').should('not.exist');
    cy.get('#left-Trace').should('not.exist');
    cy.get('#left-Trash').should('not.exist');
  });
});
