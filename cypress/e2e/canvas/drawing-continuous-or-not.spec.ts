describe('drawing continuous', () => {
  beforeEach(() => {
    cy.landingEditor();
  });

  it('drawing continuous', () => {
    // Step 1: Click on the top bar menu container
    cy.get('.menu-btn-container').click();

    // Step 2: Click on the "File" submenu
    cy.contains('div[role="menuitem"]', 'File').click();

    // Step 3: Click on "Preferences"
    cy.contains('li[role="menuitem"]', 'Preferences').click();

    // Step 4: Select "On" from the dropdown    
    cy.get('#set-continuous-drawingg').select('On');

    // Step 5: Click the "Apply" button
    cy.get('div.btn.btn-done').click();

    // Step 6: Click on the left-Line
    cy.get('#left-Line').click();

    // Step 7: Draw on the canvas (line#svg_1)
    cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });

    // Step 8: Draw on the canvas (line#svg_2)
    cy.get('svg#svgcontent').trigger('mousedown', 150, 150, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 250, 250, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });

    // Step 9: Check if the line#svg_1 and line#svg_2 exists
    cy.get('#svg_1').should('exist');
    cy.get('#svg_2').should('exist');
  });

  it('not drawing continuous', () => {
    // Step 1: Click on the top bar menu container
    cy.get('.menu-btn-container').click();

    // Step 2: Click on the "File" submenu
    cy.contains('div[role="menuitem"]', 'File').click();

    // Step 3: Click on "Preferences"
    cy.contains('li[role="menuitem"]', 'Preferences').click();

    // Step 4: Select "On" from the dropdown    
    cy.get('#set-continuous-drawingg').select('Off');

    // Step 5: Click the "Apply" button
    cy.get('div.btn.btn-done').click();

    // Step 6: Click on the left-Line
    cy.get('#left-Line').click();

    // Step 7: Draw on the canvas (line#svg_1)
    cy.get('svg#svgcontent').trigger('mousedown', 0, 0, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 100, 100, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });

    // Step 8: Draw on the canvas (line#svg_2)
    cy.get('svg#svgcontent').trigger('mousedown', 150, 150, { force: true });
    cy.get('svg#svgcontent').trigger('mousemove', 250, 250, { force: true });
    cy.get('svg#svgcontent').trigger('mouseup', { force: true });

    // Step 9: Check if the line#svg_1 exists
    cy.get('#svg_1').should('exist');
    // Step 10: Check if the line#svg_2 not exists
    cy.get('#svg_2').should('not.exist');
  });
});