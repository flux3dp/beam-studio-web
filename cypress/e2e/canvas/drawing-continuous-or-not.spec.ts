describe('drawing continuous', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('drawing continuous', () => {
    cy.get('.menu-btn-container').click();

    cy.contains('div[role="menuitem"]', 'File').click();

    cy.contains('li[role="menuitem"]', 'Preferences').click();

    cy.get('#set-continuous-drawingg').select('On');

    cy.get('div.btn.btn-done').click();

    cy.get('#left-Line').click();

    cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });

    cy.get('svg#svgcontent').trigger('mousedown', 150, 150, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 250, 250, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });

    cy.get('#svg_1').should('exist');
    cy.get('#svg_2').should('exist');
  });

  it('not drawing continuous', () => {
    cy.get('.menu-btn-container').click();

    cy.contains('div[role="menuitem"]', 'File').click();

    cy.contains('li[role="menuitem"]', 'Preferences').click();

    cy.get('#set-continuous-drawingg').select('Off');

    cy.get('div.btn.btn-done').click();

    cy.get('#left-Line').click();

    cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });

    cy.get('svg#svgcontent').trigger('mousedown', 150, 150, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 250, 250, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });

    cy.get('#svg_1').should('exist');
    cy.get('#svg_2').should('not.exist');
  });
});
